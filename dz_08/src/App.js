import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import store from "./store";
import "./styles/style.css";
import HomePage from "./components/homePage/HomePage";
import CartPage from "./components/cart/CartPage";
import CatalogPage from "./components/catalog/CatalogPage";
import ProductPage from "./components/product/ProductPage";
import RegistryPage from "./components/registry/RegistryPage";
import ErrorPage from "./components/basis/ErrorPage";
import { ProductDataProvider } from "./contexts/ProductDataContext";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ProductDataProvider>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/page/:pageNumber" element={<CatalogPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/registry" element={<RegistryPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ProductDataProvider>
      </Router>
    </Provider>
  );
}

export default App;
