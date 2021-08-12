// producto mas caro
// producto con menor stock
// productos ordenados a la inversa
const fetch = require("node-fetch");
const BASE_URL = "https://fakestoreapi.com";
const getAllProducts = () => {
  return fetch(`${BASE_URL}/products`)
    .then((res) => res.json())
    .then((json) => json);
};
const findProductMoreExpensive = (products = [], priceProperty = "price") => {
  const maxPrice = Math.max(
    ...products.map((product) => product[priceProperty])
  );
  return products.find((product) => product[priceProperty] === maxPrice);
};

const findProductWithLowerStock = (products = [], stockProperty = "stock") => {
  const minStock = Math.min(
    ...products.map((product) => product[stockProperty])
  );
  return products.find((product) => product[stockProperty] === minStock);
};

const reverseSortProductsBy = (products = [], propertyOrderby = "id") => {
  return [...products]
    .sort((a, b) => a[propertyOrderby] - b[propertyOrderby])
    .reverse();
};

getAllProducts().then((products) => {
  const mostExpensiveProduct = findProductMoreExpensive(products);
  console.log(
    "🚀 ~ file: index.js ~ line 26 ~ getAllProducts ~ mostExpensiveProduct",
    mostExpensiveProduct
  );
  // add stock property with random number
  const productsWithStock = products.map((product) => ({
    ...product,
    stock: Math.floor(Math.random() * 100),
  }));
  const productWithLowerStock = findProductWithLowerStock(productsWithStock);
  console.log(
    "🚀 ~ file: index.js ~ line 33 ~ getAllProducts ~ productWithLowerStock",
    productWithLowerStock
  );
  const reverseSortProducts = reverseSortProductsBy(products);
  console.log(
    "🚀 ~ file: index.js ~ line 40 ~ getAllProducts ~ reverseSortProducts",
    reverseSortProducts
  );
});
