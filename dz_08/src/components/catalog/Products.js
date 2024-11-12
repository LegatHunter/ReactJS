import React from "react";
import Product from "./Product";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    const imagePath = item.replace("./", "");
    images[imagePath] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../img", false, /\.(png|jpe?g|svg)$/)
);

const Products = ({ productsData, pageSize, currentPage = 1 }) => {
  const startIndex = (currentPage - 1) * pageSize;
  const productsToDisplay = productsData.slice(
    startIndex,
    startIndex + pageSize
  );
  const products = productsToDisplay.map((product) => ({
    ...product,
    img: images[product.img],
  }));

  return (
    <div className="products__items-wrap">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
