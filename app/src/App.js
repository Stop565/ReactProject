import Header from "./Header/Header";
import Login from "./Login/Login";
import { Routes, Route } from "react-router-dom"
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Example from "./Example/Example";
import './reset.css'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/example' element={<Example />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
