import mysql from "mysql2/promise";

// 1: to connect mysql server
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mysql_db",
});
console.log("MySQL is Connected Successfully");

// 2: we need to create a db
// await db.execute(`create database mysql_db`);
// console.log(await db.execute("show databases"));

// 3: we need to create a table
// await db.execute(`CREATE TABLE users (
// id INT AUTO_INCREMENT PRIMARY KEY,
// username VARCHAR(100) NOT NULL,
// email VARCHAR(100) NOT NULL UNIQUE
// )`);

// 4: to perform a CRUD operation

// insert using inline which is not recommended
// await db.execute(`
//     insert into users(username, email) values('Ana', 'ana12@gmail.com')
//     `);

//using prepared statement (best practice)
// await db.execute(
//   `
//     insert into users(username, email) values(?,?)
//     `,
//   ["Sameer", "sameer12@gmail.com"],
// );

// const values = [
//   ["Den", "den@gmail.com"],
//   ["Alex", "alex@gmail.com"],
//   ["Sara", "sara@gmail.com"],
//   ["John", "john@gmail.com"],
//   ["Mia", "mia@gmail.com"],
// ];

// await db.query(`insert into users(username, email) values ?`, [values]);

// read
const [rows] = await db.execute(`select * from users`);
// const [rows] = await db.execute(`select * from users where username="Sara"`);
console.log(rows);

//update
// try {
//   const [rows] = await db.execute(
//     `update users set username='Sara Ali' where email='sara@gmail.com'`,
//   );
//   console.log("All Users", rows);
// } catch (error) {
//   console.error(error);
// }

// delete
// try {
//   const [rows] = await db.execute(
//     `delete from users where email='mia@gmail.com'`,
//   );
//   console.log("All Users", rows);
// } catch (error) {
//   console.error(error);
// }
