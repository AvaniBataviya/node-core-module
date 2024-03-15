const fs = require("fs");
const path = require("path");

console.log(__dirname);

//create folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("folder created");
});

// write file
fs.writeFile(
  path.join(__dirname, "/test", "index.txt"),
  "Hello world !!",
  (err) => {
    if (err) throw err;
    console.log("file written...");
    fs.appendFile(
      path.join(__dirname, "/test", "index.txt"),
      "\nLearning node js",
      (err) => {
        if (err) throw err;
        console.log("file written...");
      }
    );
  }
);

//read file
fs.readFile(path.join(__dirname, "/test", "index.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log("read file", data);
});

//rename file
fs.rename(
  path.join(__dirname, "/test", "index.txt"),
  path.join(__dirname, "/test", "hello.txt"),
  (err) => {
    if (err) throw err;
    console.log("rename file");
  }
);
