import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

//Node.js (14.8+) ypu can use top-level await without needing to wrap it in an async function
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const json = await response.json();
console.log(json);

// const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("<h1>Hello World</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>Hello About Page!</h1>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Hello Contact Page!</h1>");
// });

// const PORT = process.env.PORT || 3000;

//   console.log(__dirname);
//   console.log(__filename);
//   console.log(import.meta.dirname);
//   console.log(import.meta.url); //for filename

//./public --> relative path

//absolute path
const staticPath = path.join(import.meta.dirname, "public");
app.use("/public", express.static(staticPath));

app.get("/", (req, res) => {
  const homePagePath = path.join(import.meta.dirname, "public", "index.html");
  res.sendFile(homePagePath);
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
