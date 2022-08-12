import { createSlice } from '@reduxjs/toolkit';

const shippingSlice = createSlice({
  name: 'shipping',
  initialState: {
    fullName: ' ',
    adress: ' ',
    city: ' ',
    country: ' ',
    Phone: ' ',
  },
  reducers: {
    saveShipping: (state, action) => {
      state.fullName = action.payload.fullName;
      state.adress = action.payload.adress;
      state.city = action.payload.city;
      state.country = action.payload.country;
      state.Phone = action.payload.Phone;
    },
  },
});
export default shippingSlice.reducer;
export const { saveShipping } = shippingSlice.actions;
