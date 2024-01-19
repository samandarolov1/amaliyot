import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "../Slices/MainSlice";
import FilterSlice from "../Slices/FilterSlice";

const store = configureStore({
    reducer: {
        main: MainSlice,
        filters: FilterSlice
    }
})

export default store