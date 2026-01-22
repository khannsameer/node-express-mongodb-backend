import { readFile } from "fs/promises";
import crypto from "crypto";
import path from "path";
import { fileURLToPath } from "url";
import { loadLinks, saveLinks } from "../models/shortenerModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getShortenerPage = async (req, res) => {
  try {
    const file = await readFile(
      path.join(__dirname, "..", "url", "views", "index.html"),
    );

    const links = await loadLinks();

    const content = file.toString().replace(
      "{{shortened-url}}",
      Object.entries(links)
        .map(
          ([shortCode, url]) =>
            `<li>
              <a href="/${shortCode}" target="_blank">
                ${req.protocol}://${req.get("host")}/${shortCode}
              </a> → ${url}
            </li>`,
        )
        .join(""),
    );

    res.send(content);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

export const postURLShortener = async (req, res) => {
  try {
    const { url, shortCode } = req.body;
    const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

    const links = await loadLinks();

    if (links[finalShortCode]) {
      return res.status(400).send("Short code already exists");
    }

    links[finalShortCode] = url;
    await saveLinks(links);

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

export const redirectToShortLink = async (req, res) => {
  try {
    const links = await loadLinks();
    const url = links[req.params.shortCode];

    if (!url) {
      return res.status(404).send("404 Page Not Found");
    }

    res.redirect(url);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};
