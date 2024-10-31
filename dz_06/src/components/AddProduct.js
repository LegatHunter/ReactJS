import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productSlice';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(true);

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProduct({ name, description, price: parseFloat(price), available }));
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div>
      <h2>Добавить продукт</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Название" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Описание" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Цена" type="number" />
      <label>
        Доступность:
        <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
      </label>
      <button onClick={handleAddProduct}>Добавить</button>
    </div>
  );
};

export default AddProduct;
