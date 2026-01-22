import { createReadStream, createWriteStream } from "fs";
import path from "path";

const inputFilePath = path.join(import.meta.dirname, "input.txt");
const outputFilePath = path.join(import.meta.dirname, "output.txt");

const readableStream = createReadStream(inputFilePath, {
  encoding: "utf-8",
  highWaterMark: 16,
});

const writeableStram = createWriteStream(outputFilePath);

// readableStream.pipe(writeableStram);

//Listen for data chunks
readableStream.on("data", (chunk) => {
  console.log("Buffer (chunk):", Buffer.from(chunk)); // convert the chunk to a buffer
  console.log("Received chunk:", chunk); // log each 16-bytes chunk
  writeableStram.write(chunk); // write each chunk to output file
});

// Handle stream end
readableStream.on("end", () => {
  console.log("File read completed successfully.");
  writeableStram.end();
});

//Handle error
readableStream.on("error", (err) => console.error("Error", err));

writeableStram.on("error", (err) => console.error("Error", err));
