const fs = require("fs");

function readFile(path, cb) {
  fs.readFile(path, (err, data) => {
    cb(data.toString());
  });
}

function writeFile(path, content, cb) {
  fs.writeFile(path, content, function (err) {
    if (err) {
      console.error("The file cannot be writed");
    } else {
      console.log("File writed succesfully");
    }
  });
}

function removeFile(path, cb) {
    fs.unlink(path, cb);
};

//readFile(__dirname + '/file.txt', console.log);
//writeFile(__dirname + "/newFile.txt", "Hi I am a new file", console.log);
removeFile(__dirname + "/newFile.txt", console.log);