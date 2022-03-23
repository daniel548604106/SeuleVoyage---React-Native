import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GlobalState {
  value: number;
}

const initialState = { value: 0 } as GlobalState;

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = globalSlice.actions;
export default globalSlice.reducer;
