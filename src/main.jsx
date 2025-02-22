import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Add from './pages/add/Add.jsx';
import Home from './pages/home/Home.jsx';
import Type from './pages/type/Tyoe.jsx';
import Order from './pages/order/Order.jsx';
import Edite from './pages/edet/Edite.jsx';
import Read from './pages/read/Read.jsx';
import Evry from './pages/evry/Evry.jsx';
import Code from './pages/code/Code.jsx';
import Codes from './pages/Codes/Codes.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path='/add' element={<Add />} />
    <Route path='/type/:id' element={<Type />} />
    <Route path='/order' element={<Order />} />
    <Route path='/edite/:id' element={<Edite />} />
    <Route path='/read' element={<Read />} />
    <Route path='/evry' element={<Evry />} />
    <Route path='/code' element={<Code />} />
    <Route path='/codes' element={<Codes />} />
  </Route>
));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)