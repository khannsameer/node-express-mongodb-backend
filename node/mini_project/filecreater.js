import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCreation = () => {
  rl.question("Enter the file name:", (filename) => {
    rl.question("Enter the content for your file:", (content) => {
      fs.writeFile(`${filename}.txt`, content, (error) => {
        if (error) {
          console.error(`Error while writing the file: , ${error.message}`);
        } else {
          console.log(`"${filename}.txt" file is created successfully!`);
        }
      });
      rl.close();
    });
  });
};

fileCreation();
