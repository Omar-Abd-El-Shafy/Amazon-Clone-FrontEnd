import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import './index.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
function App() {
  return (
    <Router>
      <div className='d-flex flex-column main'>
        <Nav />
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
