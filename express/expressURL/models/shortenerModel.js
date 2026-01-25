// // import { db } from "../config/db.js";

// export const loadLinks = async () => {
//   const [rows] = await db.execute(`select * from short_links`);
//   return rows;
// };

// export const insertShortLinks = async ({ url, shortCode }) => {
//   const [result] = await db.execute(
//     `insert into short_links(short_code, url) values(?, ?)`,
//     [shortCode, url],
//   );
//   return result;
// };

// export const getLinkByShortCode = async (shortcode) => {
//   const [rows] = await db.execute(
//     `select * from short_links where short_code = ?`,
//     [shortcode],
//   );

//   if (rows.length > 0) {
//     return rows[0];
//   } else {
//     return null;
//   }
// };
