import { useState } from "react";

const useDownloadChunk = () => {
  const [fileDatas, setFileDatas] = useState()
  const fileMeta = (hashCode, url) => {
    try {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("progress", function (evt) {
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
          }
        }, false);

        xhr.open('GET', `${url}fileMeta/view?hashCode=${hashCode}`, true);
        xhr.withCredentials = true;
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onload = function (e) {
          var status = xhr.status;
          if (status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(status);
          }
        };
        xhr.send();
      });

    } catch (e) {
    }
  }
  const download = (hashCode, offset, url) => {
    try {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("progress", function (evt) {
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
          }
        }, false);

        xhr.open('GET', `${url}filePart/view?hashCode=${hashCode}&offset=${offset}`, true);
        xhr.withCredentials = true;
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onload = function (e) {
          var status = xhr.status;
          if (status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(status);
          }
        };
        xhr.send();
      });

    } catch (e) {
    }
  }
  const downloadChunkFile = async (hashCode) => {
    let byteArr = []
    await fileMeta(hashCode, process.env.REACT_APP_CHAT_BASE_URL).then(async resolve => {
      for (let i = 0; i < resolve.partCount; i++) {
        await download(hashCode, i, process.env.REACT_APP_CHAT_BASE_URL).then(data => {
          if (byteArr.length === 0) {
            byteArr = data.data;
          } else {
            byteArr = byteArr.concat(data.data);
          }
          if (resolve.partCount === i + 1) {
            var blob = new Blob([new Uint8Array(byteArr)], { type: resolve.mimeType });
            var imageUrl = URL.createObjectURL(blob);
            setFileDatas({ url: imageUrl, hashCode: hashCode , mimeType: resolve.mimeType  })
          } else {
            return false
          }
        })
      }
    });
  }
  return [fileDatas, downloadChunkFile]; // <-- return state and fetch function
};

export default useDownloadChunk;
