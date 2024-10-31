import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../store/productSlice';

const EditProduct = ({ product, onClose }) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);

  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateProduct({ id: product.id, name, description, price: parseFloat(price), available }));
    onClose();
  };

  return (
    <div>
      <hr />
      <h2>Изменение продукта {name}</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Название" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Описание" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Цена" type="number" />
      <label>
        Доступность:
        <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
      </label>
      <button onClick={handleUpdate}>Обновить</button>
      <button onClick={onClose}>Отменить</button>
    </div>
  );
};

export default EditProduct;
