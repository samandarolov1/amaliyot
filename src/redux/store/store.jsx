import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "../Slices/MainSlice";
import FilterSlice from "../Slices/FilterSlice";
import BasketSlice from "../Slices/BasketSlice";
const store = configureStore({
    reducer: {
        main: MainSlice,
        filters: FilterSlice,
        basket: BasketSlice
    }
})

export default store