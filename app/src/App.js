import Header from "./Header/Header";
import Login from "./Login/Login";
import { Routes, Route } from "react-router-dom"
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Example from "./Example/Example";


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/example' element={<Example />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
