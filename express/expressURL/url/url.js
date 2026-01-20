import { readFile, writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";
import express from "express";

const app = express();

const PORT = process.env.PORT || 3002;
const DATA_FILE = path.join("data", "links.json");

app.use(express.static("public")); //to server a static file
app.use(express.urlencoded({ extended: true }));

const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeFile(DATA_FILE, JSON.stringify({}));
      return {};
    }
    throw new error();
  }
};

const saveLinks = async (links) => {
  await writeFile(DATA_FILE, JSON.stringify(links));
};

app.get("/", async (req, res) => {
  try {
    const file = await readFile(path.join("views", "index.html"));
    const links = await loadLinks();

    const content = file.toString().replaceAll(
      "{{shortened-url}}",
      Object.entries(links)
        .map(
          ([shortCode, url]) =>
            `<li><a href="/${shortCode}" target="_blank">${req.host}/${shortCode}</a> -> ${url}</li>`,
        )
        .join(""),
    );

    return res.send(content);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
});

app.post("/", async (req, res) => {
  try {
    const { url, shortCode } = req.body; //in req.body u will get all the data
    const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

    const links = await loadLinks();

    if (links[finalShortCode]) {
      return res
        .status(400)
        .send("Short code already exists. Please choose another");
    }

    links[finalShortCode] = url;

    await saveLinks(links);
  } catch (error) {}
});

app.get("/:shortCode", async (req, res) => {
  try {
    const { shortCode } = req.params;
    const links = await loadLinks();

    if (!links[shortCode]) return res.status(404).send("404 error occurred");
    return res.redirect(links[shortCode]);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
