import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}; 


export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state ) => {
      console.log( "increment state : " , state.value )
      state.value += 1; 
      console.log( "increment state2 : " , state.value)

    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer
