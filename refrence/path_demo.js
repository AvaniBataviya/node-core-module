const path = require("path");

console.log(__filename);

//base name
console.log(path.basename(__filename));

//dir name
console.log(path.dirname(__filename));

//extentions
console.log(path.extname(__filename));

//concatenate paths
console.log(path.join(__dirname, "test", "index.html"));
