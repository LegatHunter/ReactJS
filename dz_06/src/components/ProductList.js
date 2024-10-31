import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct, toggleAvailability } from '../store/productSlice';
import EditProduct from './EditProduct';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [editingProduct, setEditingProduct] = useState(null);

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  const handleToggleAvailability = (id) => {
    dispatch(toggleAvailability(id));
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  return (
    <div>
      <h2>Список продуктов</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Цена: {product.price}</p>
            <p>Доступность: {product.available ? 'Да' : 'Нет'}</p>
            <button onClick={() => handleToggleAvailability(product.id)}>
              Переключить доступность
            </button>
            <button onClick={() => handleRemove(product.id)}>Удалить</button>
            <button onClick={() => handleEdit(product)}>Изменить</button>
          </li>
        ))}
      </ul>
      {editingProduct && (
        <EditProduct product={editingProduct} onClose={() => setEditingProduct(null)} />
      )}
    </div>
  );
};

export default ProductList;
