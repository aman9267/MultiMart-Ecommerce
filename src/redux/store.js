import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./slices/cartSlices";

const store = configureStore({
  reducer: {
    cart: Reducer,
    // like: likeReducer,
  },
});

export default store;
