import { readFile, writeFile } from "fs/promises";
import crypto from "crypto";
import path from "path";
import { Router } from "express";
import { fileURLToPath } from "url";

const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join("data", "links.json");

const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeFile(DATA_FILE, JSON.stringify({}));
      return {};
    }
    throw error;
  }
};

const saveLinks = async (links) => {
  await writeFile(DATA_FILE, JSON.stringify(links, null, 2));
};

router.get("/report", async (req, res) => {
  const students = [
    {
      name: "Alice",
      Grade: "A+",
      Subject: "Science",
    },
    {
      name: "Bob",
      Grade: "A",
      Subject: "Mathematics",
    },
    {
      name: "Charlie",
      Grade: "B+",
      Subject: "English",
    },
    {
      name: "Diana",
      Grade: "A+",
      Subject: "Computer Science",
    },
    {
      name: "Ethan",
      Grade: "B",
      Subject: "History",
    },
    {
      name: "Fiona",
      Grade: "A",
      Subject: "Physics",
    },
  ];

  return res.render("report", { students });
});

router.get("/", async (req, res) => {
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
});

router.post("/", async (req, res) => {
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
});

router.get("/:shortCode", async (req, res) => {
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
});

//default export
// export default router;

//named export for best practices
export const shortenerRoutes = router;
