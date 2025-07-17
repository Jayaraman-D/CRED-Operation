// Edit.jsx File

import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Edit() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [productData, setProduct] = useState({ name: '', price: '' });

    useEffect(() => {

        axios.get(`http://localhost:3000/products/${id}`)
            .then((data) => setProduct(data.data))
            .catch((error) => console.error(error))
    }, [])

    const handleUpdate = () => {
        axios.put(`http://localhost:3000/products/${id}`, productData)
            .then(() => {
                console.log('updated successfully')
                navigate('/')
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div className="edit-container">
            <h2>Edit Product</h2>

            <div className="form-group">
                <label>Product Name:</label>
                <input
                    type='text'
                    value={productData.name}
                    name='name'
                    onChange={(e) => setProduct({ ...productData, name: e.target.value })}
                />
            </div>

            <div className="form-group">
                <label>Product Price:</label>
                <input
                    type='text'
                    value={productData.price}
                    name='price'
                    onChange={(e) => setProduct({ ...productData, price: e.target.value })}
                />
            </div>

            <div className="button-group">
                <button type='button' className='btn update-btn' onClick={handleUpdate}>Update</button>
                <button type='button' className='btn cancel-btn' onClick={() => navigate('/')}>Cancel</button>
            </div>
        </div>
    );
}

export default Edit