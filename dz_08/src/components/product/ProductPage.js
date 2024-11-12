import React, { useEffect } from "react";
import Header from "../basis/header/Header";
import Footer from "../basis/footer/Footer";
import Subscribe from "../basis/subscribe/Subscribe";
import ProductsForPage from "./ProductsForPage";
import Description from "./Description";
import BreadCrumbs from "../basis/BreadCrumbs";

const ProductPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Header />
      <BreadCrumbs title={"NEW ARRIVALS"} />
      <Description />
      <ProductsForPage />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default ProductPage;
