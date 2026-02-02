import fs from "fs";

const categories = [
  "Electronics",
  "Audio",
  "Accessories",
  "Wearables",
  "Home",
  "Storage",
];
const brands = [
  "Samsung",
  "Apple",
  "Mi",
  "Boat",
  "Sony",
  "Logitech",
  "HP",
  "Dell",
  "Noise",
  "Philips",
];

const products = [];

for (let i = 1; i <= 10000; i++) {
  const product = {
    productId: `P${String(i).padStart(5, "0")}`,
    name: `Product ${i}`,
    category: categories[Math.floor(Math.random() * categories.length)],
    brand: brands[Math.floor(Math.random() * brands.length)],
    price: Math.floor(Math.random() * 9000) + 500,
    currency: "INR",
    stock: Math.floor(Math.random() * 200) + 1,
    rating: +(Math.random() * 2 + 3).toFixed(1),
    createdAt: new Date().toISOString(),
  };

  products.push(product);
}

fs.writeFileSync("products.json", JSON.stringify(products, null, 2));
console.log("✅ 10,000 products generated successfully!");
