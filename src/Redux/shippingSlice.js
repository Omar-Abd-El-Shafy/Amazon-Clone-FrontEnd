import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  userAdress: localStorage.getItem('shipping')
    ? JSON.parse(localStorage.getItem('shipping'))
    : {
        fullName: '',
        adress: '',
        city: '',
        country: '',
        phone: '',
      },
};

const shippingSlice = createSlice({
  name: 'shipping',
  initialState,
  reducers: {
    saveShipping: (state, action) => {
      state.userAdress.fullName = action.payload.fullName;
      state.userAdress.adress = action.payload.adress;
      state.userAdress.city = action.payload.city;
      state.userAdress.country = action.payload.country;
      state.userAdress.phone = action.payload.phone;
      //store at local storage
      localStorage.setItem('shipping', JSON.stringify(state.userAdress));
    },
  },
});
export default shippingSlice.reducer;
export const { saveShipping } = shippingSlice.actions;
