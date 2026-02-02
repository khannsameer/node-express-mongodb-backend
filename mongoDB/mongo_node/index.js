import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://sameerskworld_db_user:<password>@cluster0.twjravw.mongodb.net/";
const client = new MongoClient(uri);

const main = async () => {
  try {
    await client.connect();

    const db = client.db("shop");
    const collection = db.collection("products");

    const data = await collection
      .find({ price: { $gt: 5000 } })
      .limit(3)
      .toArray();

    console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};

main();
