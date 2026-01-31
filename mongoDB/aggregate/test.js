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

db.products.aggregate([
  { $match: { price: { $gt: 1200 } } },

  {
    $group: {
      _id: "$price",
      allColors: { $push: "$colors" },
    },
  },
]);

db.products.aggregate([
  { $unwind: "$colors" },
  { $match: { price: { $gt: 1200 } } },

  {
    $group: {
      _id: "$price",
      allColors: { $push: "$colors" },
    },
  },
]);

db.col.aggregate([
  {
    $project: {
      name: 1,
      Values: {
        $filter: {
          input: "$values",
          as: "val",
          cond: { $gt: ["$$val", 30] },
        },
      },
    },
  },
]);
