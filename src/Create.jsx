import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Create() {
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  function handleNameChange(e) {
    const userdata = e.target.value;
    setProductName(userdata);
    console.log(userdata)

  }

  function handlePriceChange(event) {
    const pwd = event.target.value;
    setProductPrice(pwd);
    console.log(pwd);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log("enter key pressed");
      console.log('product Name is: ' + productName)
      console.log('Product Price is: ' + productPrice)
    }

  }

  const handleAddButton = () => {
    console.log('product Name is: ' + productName)
    console.log('Product Price is: ' + productPrice)
    setProductName('');
    setProductPrice('');
    axios.post('http://localhost:3000/products', { "name": productName, "price": productPrice })
      .then(console.log('data added'))
      .catch((error) => console.error(error))
  }



  return (
    <div className="create-container">
      <form>
        <label>Product Name:</label>
        <input type='text'
          placeholder='Enter the product name'
          name='name'
          value={productName}
          // onChange={handleNameChange}
          onChange={(e)=>setProductName(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <label>Product Price:</label>
        <input
          type='number'
          placeholder='Enter the Product price'
          value={productPrice}
          onChange={handlePriceChange}
          onKeyDown={handleKeyDown}
        />

        <button type='button' className='btn btn-success' onClick={handleAddButton}>Add</button>
        <button type='button' className='btn btn-info' onClick={() => { navigate('/') }}>Back</button>
      </form>
    </div>
  );
}

export default Create;