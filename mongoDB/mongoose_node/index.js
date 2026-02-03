import mongoose from "mongoose";

// MongoDB local connection URI
const uri =
  "mongodb+srv://sameerskworld_db_user:<password>@cluster0.twjravw.mongodb.net/shop";

// Connect to MongoDB
mongoose.connect(uri);

//we need to create a schema (structure of documents)
const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  brand: String,
  price: Number,
  stock: Number,
  rating: Number,
  createdAt: String,
});

// ✅ Create model using mongoose.model()
//we need to now create a model   -> kind of collection name
// "Product" → model name (collection will be "products")
const Product = mongoose.model("Product", productSchema);

const data1 = {
  name: "Samsung Galaxy S23 Ultra",
  category: "Mobile",
  brand: "Samsung",
  price: 89999,
  stock: 25,
  rating: 4.5,
  createdAt: "2025-01-20T10:30:00Z",
};

const main = async () => {
  try {
    // Find products with exact price = 69999
    // const data = await Product.find({ price: { $eq: 69999 } });

    // Print result
    // console.log(data);

    // insert documents
    // const data = await Product.insertOne(data1);
    // console.log(data);

    //update query
    // const updateQuery = await Product.updateOne(
    //   { name: "Samsung Galaxy S23 Ultra", price: 89999 },
    //   { $set: { price: 95000 } },
    // );
    // console.log(updateQuery);

    //delete the document
    const deleteDocument = await Product.deleteOne({
      name: "Samsung Galaxy S23 Ultra",
      price: 95000,
    });
    console.log(deleteDocument);
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
  }
};

main();
