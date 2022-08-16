import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  payment: localStorage.getItem('payment')
    ? JSON.parse(localStorage.getItem('payment'))
    : ' ',
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    savepayment: (state, action) => {
    
      state.payment = action.payload.payment;
      localStorage.setItem('payment', JSON.stringify(state.payment));
      //store at local storage
      
    },
  },
});
export default paymentSlice.reducer;
export const { savepayment } = paymentSlice.actions;
