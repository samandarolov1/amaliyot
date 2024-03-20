import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    categoriesShow: [],
    homeCard: [],
    navShow: false,
    comforts: [],
    toGift: {},
    contactDatas: {},
    isloading: true,
    blogC: []
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
        },
        addGiftHome: (state, value) => {
            state.toGift = value.payload
        },
        getContactDatas: (state, value) => {
            state.contactDatas = value.payload
        },
        addBlogC: (state, action) => {
            state.blogC = action.payload
        }
    }
})

export const {
    addCategory,
    addCards,
    showNavbar,
    addComforts,
    addGiftHome,
    getContactDatas,
    addBlogC
} = MainSlice.actions;

export default MainSlice.reducer;