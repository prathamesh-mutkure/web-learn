export const Product = {
  category: (parent, args, { db }) => {
    const { categoryId } = parent;

    return db.categories.find((cat) => cat.id == categoryId);
  },

  reviews: ({ id }, args, { db }) => {
    return db.reviews.filter((review) => review.productId === id);
  },
};
