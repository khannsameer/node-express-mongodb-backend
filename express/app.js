import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

//Node.js (14.8+) ypu can use top-level await without needing to wrap it in an async function
/* const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const json = await response.json();
console.log(json); */

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
app.use(express.static(staticPath));

app.use(express.urlencoded({ extended: true })); //to access data from post request.to parse the body request

// form get method
// app.get("/contact", (req, res) => {
//   console.log(req.query);
//   res.redirect("/");
// });

//post method
app.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

/* app.get("/product", (req, res) => {
  console.log(req.query);
  // res.send(`<h1>user search for product ${req.query.search} mobile</h1>`);
  res.send(
    `<h1>user search for product page ${req.query.page} ${req.query.limit} mobile</h1>`,
  );
});

app.get("/", (req, res) => {
  const homePagePath = path.join(import.meta.dirname, "public", "index.html");
  res.sendFile(homePagePath);
});

app.get("/profile/:username", (req, res) => {
  console.log(req.params);
  res.send(`<h1>Hie, My name is ${req.params.username}</h1>`);
});

app.get("/profile/:username/article/:slug", (req, res) => {
  console.log(req.params);
  const formatedSlug = req.params.slug.replace(/-/g, " ");
  res.send(`<h1>Article ${req.params.username} by ${formatedSlug}</h1>`);
}); */

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
