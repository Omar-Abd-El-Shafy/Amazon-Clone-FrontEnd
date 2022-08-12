//admin
import Dashboard from './pages/Dashboard';
import DashProducts from './Components/Dashboard/DashProducts';
import DashMain from './Components/Dashboard/DashMain';
//style
import { Container } from 'react-bootstrap';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
//depend
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import { userSliceActions } from '../src/Redux/userSlice';
import AOS from 'aos';
//componants
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SideBar from './Components/SideBar/SideBar';
import BackTop from './Components/backTop/BackTop';
//pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import PasswordReset from './pages/PasswordReset';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Department from './pages/Department';
import ProductDetails from './pages/ProductDetails';
import NoTFound from './Components/notFound/NoTFound';
import About from './pages/About';
import CartPage from './pages/CartPage';
import ShippingAdress from './pages/ShippingAdress';
import Payment from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder';
import {
  prodacDeailUrl,
  ProdactCategoriesUrl,
  SingledepartmentUrl,
} from './Redux/URL';

// import AddProduct from "./pages/AddProduct";
// import tokenExpirationDate from "../src/pages/Login";

// let logoutTimer;

function App() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  // const [tokenExpirationDatee, setTokenExpirationDatee] = useState();
  // setTokenExpirationDatee(tokenExpirationDate);
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData?.userId &&
      storedData?.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      dispatch(
        userSliceActions.setUser({
          id: storedData.userId,
          userName: storedData.name,
          userToken: storedData.token,
        })
      );
    }
  }, [
    dispatch,
    loggedInUser?.id,
    loggedInUser?.userName,
    loggedInUser?.userToken,
  ]);

  // useEffect(() => {
  //   if (loggedInUser?.userToken && tokenExpirationDate) {
  //     const remainingTime =
  //       tokenExpirationDate.getTime() - new Date().getTime();
  //     logoutTimer = setTimeout(
  //       dispatch(userSliceActions.logout()),
  //       remainingTime
  //     );
  //   } else {
  //     clearTimeout(logoutTimer);
  //   }
  // }, [dispatch, loggedInUser?.userToken]);

  // AOS.init();
  // AOS.refresh();

  // userId: loggedInUser?.id,
  // token: loggedInUser?.userToken,

  const [showNav, setShowNav] = useState(true);
  return (
    <Router>
      <ToastContainer
        autoClose="1000"
        theme="colored"
        position="bottom-left"
        transition={Flip}
      />
      <div className="d-flex flex-column main">
        {showNav && (
          <div>
            <Header />
          </div>
        )}
        {showNav && <SideBar />}
        <main>
          <Container fluid className="mt-5 text-capitalize">
            <Routes>
              <Route exact path="/" element={<Home funcNav={setShowNav} />} />
              <Route path="/login" element={<Login funcNav={setShowNav} />} />
              <Route path="/signup" element={<Signup funcNav={setShowNav} />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/forgot-password"
                element={<ForgotPassword funcNav={setShowNav} />}
              />
              <Route
                path="/password-reset/:id/:token"
                element={<PasswordReset />}
              />
              {/* /product?category=62e10691f51e881cae88cf9f */}
              <Route
                path={`${ProdactCategoriesUrl}id`}
                element={<CategoryPage />}
              />
              <Route
                path={`${prodacDeailUrl}:id`}
                element={<ProductDetails />}
              />
              <Route
                path={`${SingledepartmentUrl}:id`}
                element={<Department />}
              />

              <Route path="CartPage" element={<CartPage />} />
              <Route path="ShippingAdress" element={<ShippingAdress />} />
              <Route path="Payment" element={<Payment />} />
              <Route path="PlaceOrder" element={<PlaceOrder />} />
              <Route path="About" element={<About />} />
              {/* //////////////////////////Admin/////////////////////// */}
              <Route
                path="/dashboard"
                element={<Dashboard funcNav={setShowNav} />}
              >
                <Route index element={<DashMain />} />
                <Route path="DashProducts" element={<DashProducts />} />
                <Route path="DashMain" element={<DashMain />} />
              </Route>
              {/* <Route path="/addProduct" element={<AddProduct />} /> */}
              <Route path="*" element={<NoTFound />} />
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
