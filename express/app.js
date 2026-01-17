import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

//absolute path
const staticPath = path.join(import.meta.dirname, "public");

app.use("/public", express.static(staticPath));

//./public --> relative path

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

app.get("/", (req, res) => {
  const homePagePath = path.join(import.meta.dirname, "public", "index.html");

  res.sendFile(homePagePath);
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
