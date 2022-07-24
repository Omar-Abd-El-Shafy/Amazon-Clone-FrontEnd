import ProHome from './pages/ProHome';
import ProductDetails from './pages/ProductDetails';
import BackTop from './Components/backTop/BackTop';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import CartPage from './pages/CartPage';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import NoTFound from './Components/notFound/NoTFound';
function App() {
  return (
    <Router>
      <div className="d-flex flex-column main">
        <Header />
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/CartPage" element={<CartPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/" exact element={ <ProHome /> } />
              <Route path="*" exact element={ <NoTFound /> } />
              
            </Routes>
          </Container>
        </main>
        <BackTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
