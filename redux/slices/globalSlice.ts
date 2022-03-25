import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GlobalState {
  value: number;
  isLoggedIn: boolean;
  user: {
    name: string;
    age: number;
    id: number;
    date_of_birth: Date;
  } | null;
}

const initialState = { value: 0, isLoggedIn: true, user: null } as GlobalState;

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
    setUser(state, action: PayloadAction<any | null>) {
      state.user = action.payload;
    },
  },
});

export const { setIsLoggedIn, setUser } = globalSlice.actions;
export default globalSlice.reducer;
