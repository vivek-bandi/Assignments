const fs = require("fs");
fs.readFile("file.txt", "utf-8", function (err, data) {
  if (err) {
    console.log(err);
  }
  data = data.replace(/ \s+ /g, " "); //\s+ used to remove all extra spaces
  fs.writeFile("file.txt", data, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("removed all the extra spaces");
  });
});
