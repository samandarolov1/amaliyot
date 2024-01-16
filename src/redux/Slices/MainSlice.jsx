import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    categoriesShow: [],
    homeCard: [],
    navShow: false,
    isloading: true
}

const MainSlice = createSlice({
    name: "mainSlice",
    initialState,
    reducers: {
        addCategory: (state, value) => {
            state.categoriesShow = value.payload
            state.isloading = false
        },
        addCards: (state, value) => {
            state.homeCard = value.payload
        },
        showNavbar: (state) => {
            state.navShow = !state.navShow
        }
    }
})

export const {
    addCategory,
    addCards,
    showNavbar
} = MainSlice.actions;

export default MainSlice.reducer;