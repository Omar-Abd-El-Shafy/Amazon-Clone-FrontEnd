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
import React, { useState, useEffect, useCallback } from "react";
import ForgotPassword from "./pages/ForgotPassword";
import PasswordReset from "./pages/PasswordReset";
import SideBar from "./Components/SideBar/SideBar";
import Dashboard from "./pages/Dashboard";
import DashProducts from "./Components/Dashboard/DashProducts";
import DashMain from "./Components/Dashboard/DashMain";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/About";
import AOS from "aos";
import "aos/dist/aos.css";
import EditProfileForm from "./Components/EditProfileForm/EditProfileForm";
import CategoryPage from "./pages/CategoryPage";
import NoTFound from "./Components/notFound/NoTFound";
// import AddProduct from "./pages/AddProduct";
import { useSelector, useDispatch } from "react-redux";
import { userSliceActions } from "../src/Redux/userSlice";
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

        const storedData = JSON.parse(localStorage.getItem("userData"));
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
        <ToastContainer transition={Flip} />
        <div className="d-flex flex-column main">
          {showNav && (
            <div>
              <Header />
            </div>
          )}
          {showNav && <SideBar />}
          <main>
            <Container fluid className="mt-5">
              <Routes>
                <Route path="/About" element={<About />} />
                <Route path="/CartPage" element={<CartPage />} />
                <Route
                  path="/products/category/:id"
                  element={<CategoryPage />}
                />
                <Route path="product/one/:id" element={<ProductDetails />} />
                <Route exact path="/" element={<Home funcNav={setShowNav} />} />
                <Route path="/login" element={<Login funcNav={setShowNav} />} />
                <Route
                  path="/signup"
                  element={<Signup funcNav={setShowNav} />}
                />
                <Route
                  path="/forgot-password"
                  element={<ForgotPassword funcNav={setShowNav} />}
                />
                <Route
                  path="/password-reset/:id/:token"
                  element={<PasswordReset />}
                />
                <Route
                  path="/dashboard"
                  element={<Dashboard funcNav={setShowNav} />}
                >
                  <Route index element={<DashMain />} />
                  <Route path="DashProducts" element={<DashProducts />} />
                  <Route path="DashMain" element={<DashMain />} />
                </Route>
                <Route path="/profile" element={<EditProfileForm />} />
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
