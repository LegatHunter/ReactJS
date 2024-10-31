import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

const App = () => (
  <Provider store={store}>
    <AddProduct />
    <ProductList />
  </Provider>
);

export default App;
