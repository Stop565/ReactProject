import Header from "./Header/Header";
import Login from "./Login/Login";
import { Routes, Route } from "react-router-dom"
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Basket from "./Basket/Basket";
import './reset.css'

import axios from 'axios';
import { useEffect, useState } from "react";
import OpenCard from "./OpenCard/OpenCard";


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
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home info={info} category={category} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/:id' element={<OpenCard />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
