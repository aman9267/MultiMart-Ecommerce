import { configureStore } from "@reduxjs/toolkit";
// import cartSlices from "./slices/cartSlices";
import Reducer from "./slices/cartSlices";

const store = configureStore({
  reducer: {
    cart: Reducer,
  },
});

export default store;
