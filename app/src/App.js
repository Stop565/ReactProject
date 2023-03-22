import Header from "./Header/Header";
import Login from "./Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./Footer/Footer";
import Main from "./Main/Main";


const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />

          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
