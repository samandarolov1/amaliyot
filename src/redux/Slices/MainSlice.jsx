import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    categoriesShow: [],
    homeCard: [],
    navShow: false,
    comforts: [],
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
        },
        addComforts: (state, value) => {
            state.comforts = value.payload
        }
    }
})

export const {
    addCategory,
    addCards,
    showNavbar,
    addComforts
} = MainSlice.actions;

export default MainSlice.reducer;