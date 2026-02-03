// Import MongoClient class from mongodb package
// MongoClient is used to connect Node.js with MongoDB
import { MongoClient } from "mongodb";

// MongoDB Atlas connection string (URI)
// It contains username, password, and cluster address
const uri =
  "mongodb+srv://sameerskworld_db_user:<password>@cluster0.twjravw.mongodb.net/";

// Create a new MongoDB client using the URI
// This does NOT connect yet, it only prepares the client
const client = new MongoClient(uri);

const data1 = {
  name: "Samsung Galaxy S21",
  category: "Mobile",
  brand: "Samsung",
  price: 69999,
  stock: 25,
  rating: 4.5,
  createdAt: "2025-01-20T10:30:00Z",
};

// Main async function to handle MongoDB operations
const main = async () => {
  try {
    // Connect to MongoDB Atlas
    // Execution pauses here until connection is successful
    await client.connect();

    // Select the database named "shop"
    // If it does not exist, MongoDB will create it automatically
    const db = client.db("shop");

    // Select the "products" collection from the database
    // If it does not exist, it will be created when data is inserted
    const collection = db.collection("products");

    await collection.insertOne(data1);

    // Query the collection to find products
    // price greater than 5000
    // limit results to only 3 documents
    const data = await collection
      .find({ price: { $eq: 69999 } }) // $gt means "greater than"
      .limit(3) // return only 3 documents
      .toArray(); // convert cursor into array

    // Print the fetched data in the console
    console.log(data);
  } catch (error) {
    // Catch and print any error (connection, query, auth, etc.)
    console.error(error);
  } finally {
    // Close the MongoDB connection
    // This runs whether an error occurs or not
    await client.close();
  }
};

main();
