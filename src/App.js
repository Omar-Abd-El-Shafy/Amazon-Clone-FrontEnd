import ProHome from "./pages/ProHome";
import ProductDetails from "./pages/ProductDetails";
import BackTop from "./Components/backTop/BackTop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import CartPage from "./pages/CartPage";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { useState } from "react";

function App() {
    const [showNav, setShowNav] = useState(true);
    return (
        <Router>
            <div className="d-flex flex-column main">
                {showNav && (
                    <nav>
                        <Header />
                    </nav>
                )}
                <main>
                    <Container className="mt-3">
                        <Routes>
                            <Route path="/CartPage" element={<CartPage />} />
                            <Route
                                path="/product/:id"
                                element={<ProductDetails />}
                            />

                            <Route path="/" element={<ProHome />} />
                            <Route path="/login" element={<Login />} />
                            <Route
                                path="/signup"
                                element={<Signup funcNav={setShowNav} />}
                            />
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
