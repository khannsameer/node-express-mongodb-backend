import { readFile } from "fs/promises";
import http from "http";
import path from "path";

const PORT = 3001;

const serverFile = async (res, filePath, contentType) => {
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "content-Type": contentType });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { "content-Type": contentType });
    res.end("404 page not found");
  }
};

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.method === "GET") {
    if (req.url === "/") {
      return serverFile(res, path.join("public", "index.html"), "text/html");
    } else if (req.method === "GET") {
      if (req.url === "/style.css") {
        return serverFile(res, path.join("public", "style.css"), "text/css");
      }
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
