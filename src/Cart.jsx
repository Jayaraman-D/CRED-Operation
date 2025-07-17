// Cart.jsx File

import React from 'react'

// Cart.jsx

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Cart() {
  const [cartItem, setCartItem] = useState([]);
  const navigate = useNavigate();
  const [deleted, setDeleted] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((response) => setCartItem(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, [deleted]);

  const handleRead = async (id) => {
    navigate(`/read/${id}`)
  }
  const handleDeleteBtn = (id) => {
    console.log('deleten btn clicked');
    axios.delete(`http://localhost:3000/products/${id}`)
      // .then(() => console.log('product Deleted'))
      .then(setDeleted(!deleted))
      .catch((error) => console.error(error))

  }

  const handleEdit = (id) => {
    navigate(`/edit/${id}`)
  }
  return (
    <div>
      <div>
        <Link to='/create' className='btn btn-success m-3'>Create</Link>
      </div>
      {cartItem.length > 0 ? (
        cartItem.map((item) => (
          <div key={item.id} className='product-container'>
            <h3> Product Name:{item.name}</h3>
            <h3>Price: {item.price}</h3>
            <button className='btn btn-primary m-2' onClick={() => { handleRead(item.id) }}>Read</button>
            <button className='btn btn-secondary m-2' onClick={() => { handleEdit(item.id) }}>edit</button>
            <button className='btn btn-danger' onClick={() => { handleDeleteBtn(item.id) }}>delete</button>
          </div>
        ))
      ) : (
        <div>No Product</div>
      )}
    </div>
  );
}

export default Cart;


