//admin
import Dashboard from "./pages/Dashboard";
import DashProducts from "./Components/Dashboard/DashProducts";
import Users from "./Components/Dashboard/Users";
//style
import { Container, Row } from "react-bootstrap";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
//depend
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Flip } from "react-toastify";
import { userSliceActions } from "../src/Redux/userSlice";
import AOS from "aos";
//componants
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SideBar from "./Components/SideBar/SideBar";
import BackTop from "./Components/backTop/BackTop";
//pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EditProfile from "./pages/EditProfile";
import UpdateName from "./Components/user/UpdateName";
import UpdatePhone from "./Components/user/UpdatePhone";
import UpdateEmail from "./Components/user/UpdateEmail";
import Updatepass from "./Components/user/Updatepass";
import ForgotPassword from "./pages/ForgotPassword";
import PasswordReset from "./pages/PasswordReset";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import Departments from "./pages/Departments";
import ProductDetails from "./pages/ProductDetails";
import NoTFound from "./Components/notFound/NoTFound";
import About from "./pages/About";
import CartPage from "./pages/CartPage";
import ShippingAdress from "./pages/ShippingAdress";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import OrderErrorPage from "./pages/OrderErrorPage";
import SearchResults from "./pages/SearchResults";
import User from "./pages/User";
import Favourite from "./pages/Favourite";
import AddReview from "./Components/Reviews/AddReview";
import Categories from "./Components/Dashboard/Categories";
import Stripe from "./pages/Stripe";
import ShippingForm from "./pages/ShippingForm";
import Search from "./Components/Header/Search/Search";
import Orders from "./pages/Orders";
import DepartmentsAdmin from "./Components/Dashboard/DepartmentsAdmin";
import Success from "./Components/orders/Success";
import UserOrder from "./Components/Dashboard/UserOrder";
function App() {
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.user.loggedInUser);
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        // push notification
        const storedData = JSON.parse(localStorage.getItem("userData"));
        if (
            storedData?.user._id &&
            storedData?.token &&
            new Date(storedData.expiration) > new Date()
        ) {
            dispatch(userSliceActions.setUser(storedData));
        }
    }, [
        dispatch,
        loggedInUser?.user?._id,
        loggedInUser?.user?.name,
        loggedInUser?.token,
    ]);
    const [showNav, setShowNav] = useState(true);
    const [showFooter, setShowFooter] = useState(true);
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
                        <Row
                            style={{
                                marginTop: "-3px",
                                marginBottom: "5px",

                                // background: '#131921',
                            }}
                            className="main-search "
                        >
                            {showNav && <Search />}
                        </Row>
                        <Routes>
                            <Route
                                exact
                                path="/"
                                element={<Home funcNav={setShowNav} />}
                            />
                            <Route
                                path="/login"
                                element={<Login funcNav={setShowNav} />}
                            />
                            <Route path="/User" element={<User />} />
                            <Route
                                path="/signup"
                                element={<Signup funcNav={setShowNav} />}
                            />
                            <Route
                                path="/EditProfile"
                                element={<EditProfile />}
                            />
                            <Route path="/Favourite" element={<Favourite />} />
                            <Route
                                path="/UpdateName"
                                element={<UpdateName />}
                            />
                            <Route
                                path="/Updatepass"
                                element={<Updatepass />}
                            />
                            <Route
                                path="/UpdatePhone"
                                element={<UpdatePhone />}
                            />
                            <Route
                                path="/UpdateEmail"
                                element={<UpdateEmail />}
                            />
                            <Route
                                path="/forgot-password"
                                element={
                                    <ForgotPassword funcNav={setShowNav} />
                                }
                            />
                            <Route
                                path="/password-reset/:id/:token"
                                element={<PasswordReset />}
                            />
                            <Route
                                path="/product/category/:id"
                                element={<CategoryPage />}
                            />
                            <Route
                                path="/product/one/:id"
                                element={<ProductDetails />}
                            />
                            <Route
                                path={"department/:id"}
                                element={<Departments />}
                            />
                            <Route
                                path="/SearchResults/:search"
                                element={<SearchResults />}
                            />
                            <Route path="/CartPage" element={<CartPage />} />
                            <Route path="/AddReview" element={<AddReview />} />
                            <Route
                                path="/ShippingAdress"
                                element={<ShippingAdress />}
                            />
                            <Route
                                path="/ShippingForm"
                                element={<ShippingForm />}
                            />
                            <Route path="/Payment" element={<Payment />} />
                            <Route
                                path="/PlaceOrder"
                                element={<PlaceOrder />}
                            />
                            <Route path="/Orders" element={<Orders />} />
                            <Route
                                path="/OrderError"
                                element={<OrderErrorPage />}
                            />
                            <Route path="/About" element={<About />} />
                            {/* //////////////////////////stripe payment/////////////////////// */}
                            <Route path="/Stripe" element={<Stripe />} />
                            <Route path="/success" element={<Success />} />
                            {/* //////////////////////////Admin/////////////////////// */}
                            <Route
                                path="/dashboard"
                                element={<Dashboard funcFoot={setShowFooter} />}
                            >
                                <Route index element={<DashProducts />} />
                                <Route
                                    path="DashProducts"
                                    element={<DashProducts />}
                                />
                                <Route path="Users" element={<Users />} />
                                <Route
                                    path="UserOrder/:userID"
                                    element={<UserOrder />}
                                />
                                <Route
                                    path="Categories"
                                    element={<Categories />}
                                />
                                <Route
                                    path="DepartmentsAdmin"
                                    element={<DepartmentsAdmin />}
                                />
                            </Route>
                            <Route path="*" element={<NoTFound />} />
                        </Routes>
                    </Container>
                </main>
                {showNav && showFooter && (
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
