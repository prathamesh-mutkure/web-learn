export const Category = {
  products: ({ id }, { filter }, { products }) => {
    let filteredProducts = products.filter(
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
