export const Product = {
  category: (parent, args, { categories }) => {
    const { categoryId } = parent;

    return categories.find((cat) => cat.id == categoryId);
  },

  reviews: ({ id }, args, { reviews }) => {
    return reviews.filter((review) => review.productId === id);
  },
};
