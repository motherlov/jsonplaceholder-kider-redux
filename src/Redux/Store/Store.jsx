import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../AuthSlice/AuthSlice";
 import CrudSlice from "../CrudSlice/CrudSlice";
import CartSlice from "../CartSlice/CartSlice"
const Store =configureStore({
    reducer: {
       
        Auth:AuthSlice.reducer,
        Crud: CrudSlice.reducer,
        Cart: CartSlice.reducer ,


       
      },
})
export default Store