const fs = require("fs");

fs.writeFile("../students.txt", "1. Joseph", (error) => {
  if (error) {
    console.log("can not write the file" + error);
  } else {
    console.log("File has been updated successfully");
  }
});
