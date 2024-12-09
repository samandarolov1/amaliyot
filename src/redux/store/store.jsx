import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "../Slices/MainSlice";
import FilterSlice from "../Slices/FilterSlice";
import BasketSlice from "../Slices/BasketSlice";
import StyleSlice from "../Slices/Style";
const store = configureStore({
    reducer: {
        main: MainSlice,
        filters: FilterSlice,
        basket: BasketSlice,
        theme: StyleSlice
    }
})

export default store