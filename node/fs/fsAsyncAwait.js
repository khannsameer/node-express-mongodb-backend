const fs = require("fs");
const path = require("path");

const fileName = "fsAsyncAwait.txt";
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

// const readFolder = async () => {
//   try {
//     const res = await fs.promises.readdir(file);
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   }
// };

// readFolder();

//write

const writeFileExample = async () => {
  try {
    await fs.promises.writeFile(
      filePath,
      "This is an Async & Await file system",
      "utf-8"
    );
    console.log("File Created Successfully!");
  } catch (error) {
    console.error("Error reading file", error);
  }
};

writeFileExample();

//read

// const readFileExample = async () => {
//   try {
//     const data = await fs.promises.readFile(filePath, "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.error("Error reading file", error);
//   }
// };

// readFileExample();

//update

// const updateFileExample = async () => {
//   try {
//     await fs.promises.appendFile(
//       filePath,
//       "\nThis Async & Await file system has been updated",
//       "utf-8"
//     );
//     console.log("The file is Updated");
//   } catch (error) {
//     console.error("Error reading file", error);
//   }
// };

// updateFileExample();

//delete

// const deleteFileExample = async () => {
//   try {
//     await fs.promises.unlink(filePath);
//     console.log("The file is deleted");
//   } catch (error) {
//     console.error("Error reading file", error);
//   }
// };

// deleteFileExample();
