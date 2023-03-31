import Register from "./Login/Register";
import Login from "./Login/Login";

import { Routes, Route } from "react-router-dom"

import Home from "./Home/Home";
import Basket from "./Basket/Basket";
import './reset.css'

import axios from 'axios';
import { useEffect, useState } from "react";
import OpenCard from "./OpenCard/OpenCard";
import HeaderFooter from "./Header/HeaderFooter";


const App = () => {
  const [info, setInfo] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products').then(({ data }) => {
      setInfo(data)
    })
  }, []);

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/categories').then(({ data }) => {
      setCategory(data)
    })
  }, []);



  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderFooter />}>
          <Route index element={<Home info={info} category={category} />} />
          <Route path='basket' element={<Basket />} />
          <Route path=':id' element={<OpenCard />} />

          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

        </Route>


      </Routes>

    </>
  );
}

export default App;
