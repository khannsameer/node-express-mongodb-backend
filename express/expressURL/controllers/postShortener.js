// import crypto from "crypto";
// import {
//   getLinkByShortCode,
//   insertShortLinks,
//   loadLinks,
// } from "../models/shortenerModel.js";

// export const getShortenerPage = async (req, res) => {
//   try {
//     // const file = await readFile(
//     //   path.join(__dirname, "..", "url", "views", "index.html"),
//     // );

//     const links = await loadLinks();

//     return res.render("index", { links, host: req.host });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal server error");
//   }
// };

// export const postURLShortener = async (req, res) => {
//   try {
//     const { url, shortCode } = req.body;
//     const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

//     // const links = await urls.find()
//     // const links = await loadLinks();
//     const link = await getLinkByShortCode(shortCode);

//     if (link) {
//       return res.status(400).send("Short code already exists");
//     }
//     // await urls.create({url,shortCode})
//     await insertShortLinks({ url, shortCode: finalShortCode });

//     res.redirect("/");
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send("Internal server error");
//   }
// };

// export async function redirectToShortLink(req, res) {
//   try {
//     const { shortCode } = req.params;
//     const link = await getLinkByShortCode(shortCode);

//     if (!link) {
//       return res.redirect("/404");
//     }

//     return res.redirect(link.url);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal server error");
//   }
// }
