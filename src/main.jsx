import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Add from './pages/add/Add.jsx';
import Home from './pages/home/Home.jsx';
import Type from './pages/type/Tyoe.jsx';
import Order from './pages/order/Order.jsx';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
  <Route path='/add' element={<Add />}/>
    <Route path='/type/:id' element={<Type />}/>
    <Route path='/order' element={<Order />}/>
  </Route>
));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)