import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    MainImg: "/first-scr-banner (0).png",
    filterCards: [],
    allCards: [],
    filterObj: {
        min: "",
        max: "",
        brand: "",
        category: "",
        color: "",
        searchWord: ""
    },
    looking : false
}


const FilterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        change: (state, value) => {
            state.MainImg = `/first-scr-banner (${value.payload}).png`
        },
        getAllCards: (state, value) => {
            state.allCards = value.payload
        },
        doFilter: (state , action) => {

            let { name, value } = action.payload
            state.filterObj = { ...state.filterObj, [name]: value }


            state.filterCards = state.allCards
                .filter(i => state.filterObj.min.length > 0 ? +i.price >= +state.filterObj.min : true)
                .filter(i => state.filterObj.max.length > 0 && +state.filterObj.max >= +state.filterObj.min ? +i.price <= +state.filterObj.max : true)
                .filter(i => state.filterObj.brand.length > 0 ? i.brand === state.filterObj.brand : true)
                .filter(i => state.filterObj.color.length > 0 ? i.color === state.filterObj.color : true)
                .filter(i => state.filterObj.category.length > 0 ? i.category === state.filterObj.category : true)
                .filter(i => state.filterObj.searchWord.length > 0 ? i.tags.toLocaleLowerCase().trim().includes(state.filterObj.searchWord.toLocaleLowerCase().trim()) || i.name.trim().toLocaleLowerCase().includes(state.filterObj.searchWord.trim().toLocaleLowerCase()): true)

            if (
                state.filterObj.min.length > 0
                || state.filterObj.max.length > 0
                || state.filterObj.brand.length > 0
                || state.filterObj.category.length > 0
                || state.filterObj.color.length > 0
                || state.filterObj.searchWord.trim().length > 0
            ) { state.looking = true }
            else {
                state.looking = false
            }
        }
    }
})

export const {
    change,
    getAllCards,
    doFilter,
    changeFilterObj,
} = FilterSlice.actions

export default FilterSlice.reducer