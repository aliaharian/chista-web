import { useState } from "react";

let arrayID = {};
let countFiles = 0;
let successCountFiles = 0;
let objectFile = {};
// let arrayID = "";
let key = null;
let requests = [];

const useUploadChunk = () => {
  const [progressPercent, setProgressPercent] = useState(0);
  const [endUpload, setEndUpload] = useState([]);
  const [uploadError, setUploadError] = useState([]);

  const uploudFile = async (file, index, objectKey) => {
    const fileType = file.type;
    objectFile = objectKey
    key = Math.floor(
      Date.now() / 1000 + index + Math.floor(Math.random() * 100)
    );
    var baseUrl = process.env.REACT_APP_CHAT_BASE_URL;
    const BYTES_PER_CHUNK = 512 * 1024; // 512KB chunk sizes.
    const SIZE = file.size;

    var start = 0;
    var end = BYTES_PER_CHUNK;
    var partCount = 0;
    var fileId = -1;
    var byteArraysFile = [];

    do {
      // Read each file synchronously as an ArrayBuffer and

      let buffer = await file.slice(start, end).arrayBuffer();

      let typedArray = new Uint8Array(buffer);

      let array = [...typedArray];

      if (byteArraysFile.length === 0) {
        byteArraysFile = array;
      } else {
        byteArraysFile = byteArraysFile.concat(array);
      }

      const data = { hashCode: key, offset: partCount, data: array, mimeType: fileType };

      try {
        await partUpload(data, baseUrl).then((resolve) => {
          fileId = resolve.fileId;
          start = end;
          end = start + BYTES_PER_CHUNK;
          partCount++;
        });
      } catch (e) {
        setUploadError([...uploadError, e]);
        break;
      }
    } while (start < SIZE);
    if (start >= SIZE && fileId > -1) {
      upload(
        key,
        SIZE,
        fileType,
        partCount,
        baseUrl,
        byteArraysFile,
        index,
        objectKey
      );
    }
  };

  const partUpload = (data, baseUrl) => {
    try {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        requests.push(xhr);    
        xhr.open("POST", `${baseUrl}filePart/insert`, true);
        xhr.withCredentials = true;
        xhr.setRequestHeader("Content-type", "application/json");

        xhr.addEventListener(
          "progress",
          function (evt) {
            if (evt.lengthComputable) {
              setProgressPercent(evt.loaded / evt.total);
            }
          },
          false
        );

        xhr.onload = function (e) {
          var status = xhr.status;
          if (status == 200) {
            //  writeArrayFilesToDB(data);
            resolve(JSON.parse(xhr.response));
          } else {
            // partUpload(data, CHAT_SERVER_URL);
            reject(status);
          }
        };
        xhr.send(JSON.stringify(data));
      });
    } catch (e) {
    }
  };

  const upload = async (
    key,
    size,
    type,
    partCount,
    url,
    byteArraysFile,
    index,
    objectKey
  ) => {
    const data = {
      hashCode: key,
      mimeType: type,
      partCount: partCount,
      size: size,
    };
    try {
      var xhr = new XMLHttpRequest();
      requests.push(xhr);    
      xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          let response = JSON.parse(xhr.responseText);
          response.arrayFiles = byteArraysFile;
          response.mimeType = type;
          response.partCount = partCount;
          response.size = size;
        }
      };

      xhr.open("POST", `${url}fileMeta/insert`, true);
      xhr.withCredentials = true;
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.onload = function (e) {
        if (xhr.status === 200) {
          JSON.parse(xhr.response).message &&
            setUploadError([...uploadError, JSON.parse(xhr.response).message]);
          if (!Array.isArray(arrayID[objectKey])) {
            arrayID[objectKey] = [];
          }
          arrayID[objectKey].push({ fileId: JSON.parse(xhr.response).id, hashCode: key });
          successCountFiles += 1;
          setEndUpload([...endUpload, JSON.parse(xhr.response).id]);
        } else {
        }
      };
      xhr.send(JSON.stringify(data));
    } catch (e) {
    }
  };

  return {
    uploudChunkFile: (fileObject) => {
      for (const [key, value] of Object.entries(fileObject)) {
        countFiles += parseInt(value.length);
        value.forEach((file, index) => uploudFile(file, index, key));
      }
    },
    progressPercent,
    uploadError,
    endUpload,
    arrayID,
    hashCode: key,
    objectFile,
    successUpload:
      Object.keys(arrayID).length > 0 && countFiles === successCountFiles
        ? true
        : false,
    endInsert: () => {
      arrayID = {};
      countFiles = 0;
      successCountFiles = 0;
      requests = []
    },
    cancelAll:() =>{
      requests.forEach(function(request) {
        request.abort()
      })
    }
  };
};

export default useUploadChunk;
