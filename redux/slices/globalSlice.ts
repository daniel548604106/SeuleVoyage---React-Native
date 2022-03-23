import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GlobalState {
  value: number;
  isLoggedIn: boolean;
}

const initialState = { value: 0, isLoggedIn: false } as GlobalState;

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
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, setIsLoggedIn } =
  globalSlice.actions;
export default globalSlice.reducer;
