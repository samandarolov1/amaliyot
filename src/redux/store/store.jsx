import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "../Slices/MainSlice";

const store = configureStore({
    reducer: {
        main: MainSlice
    }
})

export default store