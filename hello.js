const fs = require("fs");

const name = "avani";

fs.writeFileSync("user.txt", `Name: ${name}`, (err) => {
  if (err) {
    console.log("error", err);
    return err;
  }
  console.log("wrote file");
});

const http = require("http");
const server = http.createServer((req, res) => {
  console.log("incomming req");
  console.log("--->", req.headers, req.url);
});

<tbody _ngcontent-blo-c6="" class="ng-tns-c6-1 ng-star-inserted" style=""><tr _ngcontent-blo-c6="" class="point common" data-toggle="collapse" data-target="#collapse18" aria-expanded="false" aria-controls="18"><td _ngcontent-blo-c6="" class="ng-tns-c6-1"> 20/10/2023 </td><td _ngcontent-blo-c6="" class="ng-tns-c6-1">Friday   </td><td _ngcontent-blo-c6="" class="ng-tns-c6-1">Avani Bataviya</td><td _ngcontent-blo-c6="" class="ng-tns-c6-1">08:03</td></tr><tr _ngcontent-blo-c6="" class="ng-tns-c6-1"><!----></tr></tbody>
