import { createSlice } from "@reduxjs/toolkit";

let initialState = []

const MainSlice = createSlice({
    name: "mainSlice",
    initialState,
    reducers: {
        salomDe: () => {
            console.log("salom");
        }
    }
})

export const {
    salomDe
} = MainSlice.actions;

export default MainSlice.reducer;