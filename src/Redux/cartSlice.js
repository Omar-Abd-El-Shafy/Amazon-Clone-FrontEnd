import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    totalcartQuantitye: 0,
    totalCartPrice: 0,
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itamindex = state.cartItems.findIndex(
                (item) => item._id === action.payload._id
            );
            //check if item in cart -1 not exect 0 exect
            if (itamindex >= 0) {
                //if 0  qantity increase not indexs
                state.cartItems[itamindex].cartQuantity += 1;
                toast.info(
                    ` increased ${state.cartItems[itamindex].name} quantity`,
                    {}
                );
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.name} added to cart`, {});
            }
            //store at local storage
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        //remove from cart
        removeFromCart(state, action) {
            const elemints = state.cartItems.filter(
                (pro) => pro._id !== action.payload._id
            );
            // console.log(elemints);
            state.cartItems = elemints;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error(`${action.payload.name} removed from cart`, {});
        },
        //decrease
        decreaseCartItem(state, action) {
            const itamindex = state.cartItems.findIndex(
                (item) => item._id === action.payload._id
            );
            if (state.cartItems[itamindex].cartQuantity > 1) {
                state.cartItems[itamindex].cartQuantity -= 1;
                toast.warning(`${action.payload.name} decrease to cart`, {});
            } else if (state.cartItems[itamindex].cartQuantity === 1) {
                const elemints = state.cartItems.filter(
                    (pro) => pro._id !== action.payload._id
                );
                // console.log(elemints);
                state.cartItems = elemints;
                toast.error(`${action.payload.name} removed to cart`, {});
                localStorage.setItem(
                    "cartItems",
                    JSON.stringify(state.cartItems)
                );
            }
        },
        //clear cart
        clearcart(state, action) {
            state.cartItems = [];
            toast.error(` cart cleared`, {});
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        //totalCartPrice
        getTotal(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItems) => {
                    const { price, cartQuantity } = cartItems;
                    const itemTotal = price * cartQuantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;
                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            state.totalcartQuantitye = quantity;
            state.totalCartPrice = total;
        },
    },
});
export const {
    addToCart,
    removeFromCart,
    decreaseCartItem,
    clearcart,
    getTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
