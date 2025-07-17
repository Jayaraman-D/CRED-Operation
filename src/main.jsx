
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cart from './Cart.jsx'
import Read from './Read.jsx'
import Create from './Create.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Edit from './Edit.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <Cart />
},
{
  path: '/read/:id',
  element: <Read />
},
{
  path: '/create',
  element: <Create />
},
{
  path: '/edit/:id',
  element: <Edit />
}

])
createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
 
)
