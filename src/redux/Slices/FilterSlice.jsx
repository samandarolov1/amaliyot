import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    MainImg: "/first-scr-banner (0).png",
}

const FilterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        change: (state, value) => {
            state.MainImg = `/first-scr-banner (${value.payload}).png`
        }
    }
})

export const {
    change
} = FilterSlice.actions

export default FilterSlice.reducer