import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProHome from './pages/ProHome';
import ProductDetails from './pages/ProductDetails';
import BackTop from './Components/backTop/BackTop';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import CartPage from './pages/CartPage';
// import Home from './pages/Home';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import Home from './pages/Home';

function App() {
  const [showNav, setShowNav] = useState(true);
  return (
    <Router>
      <ToastContainer transition={Flip} />
      <div className="d-flex flex-column main">
        {showNav && (
          <nav>
            <Header />
          </nav>
        )}
        <main>
          <Container fluid className="mt-3">
            <Routes>
              {/* <Route path="/Home" element={<Home />} /> */}
              <Route path="/signup" element={<Signup funcNav={setShowNav} />} />
              <Route path="/login" element={<Login funcNav={setShowNav} />} />
              <Route path="/CartPage" element={<CartPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        </main>
        {showNav && (
          <footer>
            <BackTop />
            <Footer />
          </footer>
        )}
      </div>
    </Router>
  );
}

export default App;
