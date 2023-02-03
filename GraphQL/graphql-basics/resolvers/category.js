export const Category = {
  products: ({ id }, { filter }, { db }) => {
    let filteredProducts = db.products.filter(
      (product) => product.categoryId === id
    );

    if (filter) {
      if (filter.onSale) {
        filteredProducts = filteredProducts.filter((product) => product.onSale);
      }
    }

    return filteredProducts;
  },
};
