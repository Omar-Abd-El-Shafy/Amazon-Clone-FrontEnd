import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    favouriteItems: localStorage.getItem("favouriteItems")
        ? JSON.parse(localStorage.getItem("favouriteItems"))
        : [],
    counter: 0,
};

export const favouriteListSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        addToFavourites: (state, action) => {
            /**
             * if the entered pro id is found then don't add to favourite.
             * if its not found,add it the the favourite list state
             */
            let isFavourite = state.favouriteItems.findIndex(
                (pro) => pro._id === action.payload._id
            );
            if (isFavourite === -1) {
                state.favouriteItems.push({
                    ...action.payload,
                    favourite: true,
                });
                state.counter += 1;
                toast.info(`${action.payload.name} add to Favourites`, {});
            }
            localStorage.setItem(
                "favouriteItems",
                JSON.stringify(state.favouriteItems)
            );
        },
        removeFromFavourites: (state, action) => {
            /**
             * if the entered pro id is found in favourite, filter the list array
             * with this pro id and return a new list doesn't contain the favourite one
             */
            let newFavouriteListAfterRemoving = state.favouriteItems.filter(
                (fav) => fav._id !== action.payload
            );

            state.favouriteItems = newFavouriteListAfterRemoving;
            state.counter -= 1;
            toast.error(`${action.payload.name} remove From Favourites`, {});
            localStorage.setItem(
                "favouriteItems",
                JSON.stringify(state.favouriteItems)
            );
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToFavourites, removeFromFavourites } =
    favouriteListSlice.actions;

export default favouriteListSlice.reducer;
