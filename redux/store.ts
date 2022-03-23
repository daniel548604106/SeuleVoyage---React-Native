import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/homeSlice";
import globalReducer from "./slices/globalSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    global: globalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
