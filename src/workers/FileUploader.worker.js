/* eslint-disable */
var p = true;
var xhr = new XMLHttpRequest();

self.addEventListener('message', async (e) => {

  console.log("upload... ", e);
  process(e.data.file, e.data.id, e.data.baseUrl);

}, false);
self.addEventListener("error", async (e) => {
  console.log("web-worker-error", e)
  postMessage({ e });
});

const process = (blob, id, baseUrl) => {
  console.log("process", blob, id)
  const fileName = blob.name;
  const fileType = blob.type;
  const key = Math.floor(Date.now() / 1000);

  const BYTES_PER_CHUNK = 512 * 1024;  // 512KB chunk sizes.
  const SIZE = blob.size;
  var start = 0;
  var end = BYTES_PER_CHUNK;
  var partCount = 0;

  // Read each file synchronously as an ArrayBuffer and
  var reader = new FileReaderSync();

  while (start < SIZE) {

    let typedArray = new ArrayBuffer(8); // 32 Bytes
    typedArray = new Uint8Array(reader.readAsArrayBuffer(blob.slice(start, end)));
    console.log("byteLength", typedArray.byteLength)
    let array = [...typedArray];
    console.log("array>>", array, SIZE)

    const data = { "hashCode": key, "mimeType": fileType, "offset": partCount, "data": array };
    chunkUpload(data, baseUrl);
    start = end;
    end = start + BYTES_PER_CHUNK;
    const progress = (start / SIZE) * 100;
    if (progress < 100) {
      postMessage({ type: "progress", progress: progress });
    }
    partCount++;
  }
  console.log(SIZE, start);
  if (start >= SIZE) {
    upload(key, SIZE, fileType, partCount, baseUrl, fileName, id);
  }
}
const chunkUpload = (data, baseUrl) => {
  try {
    //
    xhr.open('POST', `${baseUrl}filePart/insert`, false);
    xhr.withCredentials = true;
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.addEventListener("progress", function (evt) {
      console.log("progress-worker", evt)
      if (evt.lengthComputable) {
        var percentComplete = evt.loaded / evt.total;
        // postMessage({type: "progress", progress: evt.loaded / evt.total * 100});
        console.log("percentComplete::" + percentComplete);
      }
    }, false);

    xhr.send(JSON.stringify(data));

  } catch (e) {
    console.log("part-upload", e.toString());
  }
}

const upload = (key, size, type, partCount, url, fileName, shapeId) => {
  const data = { "hashCode": key, "mimeType": type, "partCount": partCount, "size": size, "fileName": fileName };
  try {

    xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        let response = JSON.parse(xhr.responseText);
        console.log("response-upload", response)
        response.mimeType = type;
        response.partCount = partCount;
        response.size = size;
        response.shapeId = shapeId;
        console.log(response);
        postMessage({ response });
        self.close();
      }
    }

    xhr.open('POST', `${url}fileMeta/insert`, false);
    xhr.withCredentials = true;
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function (e) { console.log(e) };
    xhr.send(JSON.stringify(data));
  } catch (e) {
    console.log("upload-error", e.toString());
    // self.close();
  }
}
