import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  userAdress: localStorage.getItem('shipping')
    ? JSON.parse(localStorage.getItem('shipping'))
    : {
        street: '',
        building: '',
        city: '',
        state: '',
        phone: '',
        zipCode: '',
        country: '',
      },
};

const shippingSlice = createSlice({
  name: 'shipping',
  initialState,
  reducers: {
    saveShipping: (state, action) => {
      state.userAdress.street = action.payload.street;
      state.userAdress.building = action.payload.building;
      state.userAdress.city = action.payload.city;
      state.userAdress.state = action.payload.state;
      state.userAdress.phone = action.payload.phone;
      state.userAdress.zipCode = action.payload.zipCode;
      state.userAdress.country = action.payload.country;
      //store at local storage
      localStorage.setItem('shipping', JSON.stringify(state.userAdress));
    },
  },
});
export default shippingSlice.reducer;
export const { saveShipping } = shippingSlice.actions;
