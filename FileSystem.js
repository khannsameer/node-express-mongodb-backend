const fs = require("fs");

//writeFile
// const fileName = "test.txt";
// const fileWrite = fs.writeFileSync(fileName, "This is a text file", "utf-8");
// console.log(fileWrite);

//ReadFile
// const fileName = "test.txt";
// const readFile = fs.readFileSync(fileName, "utf-8");
// console.log(readFile);
// console.log(readFile.toString());

//updateFile
// const fileName = "test.txt";
// const appendFile = fs.appendFileSync(
//   fileName,
//   "\nThis text file is Updated",
//   "utf-8"
// );
// console.log(appendFile);

//DeleteFile
const fileName = "text.txt";
const deleteFile = fs.unlinkSync(fileName);
console.log(deleteFile);
