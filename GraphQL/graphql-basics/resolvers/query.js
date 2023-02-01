export const Query = {
  hello: (parent, args, context) => "world",

  products: (parent, { filter }, { products, reviews: allReviews }) => {
    let filteredProducts = products;

    if (filter) {
      const { onSale, avgRating } = filter;

      if (onSale) {
        filteredProducts = filteredProducts.filter((product) => product.onSale);
      }

      if (avgRating) {
        filteredProducts = filteredProducts.filter((product) => {
          const productReviews = allReviews.filter(
            (review) => review.productId == product.id
          );

          const ratings = productReviews.map((review) => review.rating);

          const productAvgRating =
            ratings.reduce((sum, val) => (sum += val)) / ratings.length;

          return productAvgRating >= avgRating;
        });
      }
    }

    return filteredProducts;
  },

  product: (parent, args, context) => {
    const { products } = context;
    const { id } = args;

    return products.find((product) => product.id === id);
  },

  categories: (parent, args, { categories }) => categories,
  category: (parent, args, { categories }) => {
    const { id } = args;

    return categories.find((cat) => cat.id === id);
  },

  reviews: (parent, args, { reviews }) => {
    return reviews;
  },
};
