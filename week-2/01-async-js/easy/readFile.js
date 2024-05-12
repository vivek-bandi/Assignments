const fs = require("fs");
fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});
//expensive operation executes first and then it read the file
// for (let i = 0; i < 1000000000000; i++) {
//   console.log(i);
// }
