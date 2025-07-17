// rfce
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Read() {
  const { id } = useParams()
  const [read, setRead] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then((data) => setRead(data.data))
      .catch((error) => {
        console.error(error);

      })
  })
  return (
    <div>

      <h1>Product Name:{read.name}</h1>
      <h2>Product Price: {read.price}</h2>

      <div>
        <button className='btn btn-info m-2' onClick={() => { navigate('/') }}>Back</button>
      </div>
    </div>
  )
}

export default Read