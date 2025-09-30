const fs = require("fs");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

// const file = __dirname;
// fs.promises
//   .readdir(file)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//write

fs.promises
  .writeFile(filePath, "This is a Promises File System", "utf-8")
  .then(console.log("File Created Successfullu"))
  .catch((err) => {
    console.log(err);
  });

//read

// fs.promises
//   .readFile(filePath, "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error("Error reading file", err);
//   });

//update

// fs.promises
//   .appendFile(filePath, "\nThis Promises File System has been updated", "utf-8")
//   .then(console.log("The file is updated"))
//   .catch((err) => {
//     console.error("Error reading file", err);
//   });

//Delete

// fs.promises
//   .unlink(filePath)
//   .then(console.log("The File is deleted"))
//   .catch((err) => {
//     console.error("Error reading file", err);
//   });
