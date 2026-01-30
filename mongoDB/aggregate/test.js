db.products.aggregate([
  {
    $group: {
      _id: "$company",
      totalProducts: { $sum: 1 },
    },
  },
]);
