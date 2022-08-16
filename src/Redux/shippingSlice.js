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
      // localStorage.setItem('shipping', JSON.stringify(state.fullName));
      state.userAdress.adress = action.payload.adress;
      // localStorage.setItem('shipping', JSON.stringify(...state.adress));

      state.userAdress.city = action.payload.city;
      // localStorage.setItem('shipping', JSON.stringify(...state.city));

      state.userAdress.country = action.payload.country;
      // localStorage.setItem('shipping', JSON.stringify(...state.country));

      state.userAdress.phone = action.payload.phone;
      localStorage.setItem('shipping', JSON.stringify(state.userAdress));

      //store at local storage
    },
  },
});
export default shippingSlice.reducer;
export const { saveShipping } = shippingSlice.actions;
