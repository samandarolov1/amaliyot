import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    categoriesShow: [],
    isloading: true
}

const MainSlice = createSlice({
    name: "mainSlice",
    initialState,
    reducers: {
        addCategory: (state, value) => {
            state.categoriesShow = value.payload
            state.isloading = false
        }
    }
})

export const {
    addCategory
} = MainSlice.actions;

export default MainSlice.reducer;