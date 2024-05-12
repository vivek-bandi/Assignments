const fs = require("fs");
fs.readFile("a2.txt", "utf-8", function (err, data) {
  if (err) {
    console.log(err);
  }
  data = data + " new one ";
  fs.writeFile("a2.txt", data, function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Data has been written");
  });
});
// for (let i = 0; i < 1000000000000; i++) {
//   console.log(i);
// }
