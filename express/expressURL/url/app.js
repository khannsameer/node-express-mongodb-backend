import { env } from "../config/env.js";
import express from "express";
import { shortenerRoutes } from "../routers/shortener.routes.js";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs"); //template engine

//express router  default
// app.use(router);

//named export
app.use(shortenerRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
