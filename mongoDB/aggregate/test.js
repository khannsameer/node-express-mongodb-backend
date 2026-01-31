db.products.aggregate([
  {
    $group: {
      _id: "$company",
      totalProducts: { $sum: 1 },
    },
  },
]);

db.products.aggregate([
  {
    $match: {
      _id: "6978c827fd1c33d923f5d7f8",
    },
  },
]);

db.products.aggregate([
  { $match: { price: { $gt: 1200 } } },
  {
    $project: {
      price: 1,
      _id: 0,
      discountPrice: { $multiply: ["$price", 0.8] },
    },
  },
]);
