import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    basketCard: [],
    coming: true,
    storageData: []
}

const BasketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        add: (state, action) => {
            state.coming = true
            if (!state.storageData.includes(action.payload)) {
                localStorage.setItem("basketId", JSON.stringify([...state.storageData, action.payload]))
            }
        },
        getLocalData: (state) => {
            state.coming = true
            state.storageData = JSON.parse(localStorage.getItem("basketId")) || []
        },
        basketFind: (state, action) => {
            state.basketCard = []
            let { data } = action.payload
            state.storageData.filter(item => {
                data.map(i => {
                    if (i.id === item) {
                        return state.basketCard = [...state.basketCard, i]
                    }
                })
            })
            state.coming = false
        },
        del: (state, action) => {
            if (state.storageData.includes(action.payload)) {
                state.storageData = state.storageData.filter(i => i !== action.payload)
                localStorage.setItem("basketId", JSON.stringify(state.storageData.filter(i => i !== action.payload)))
            }
        },
        korAdd: (state, action) => {
            if (!state.storageData.includes(action.payload)) {

             state.storageData = [...state.storageData, action.payload]
                localStorage.setItem("basketId", JSON.stringify(state.storageData))
            }
        }
    }
})

export const {
    add,
    getLocalData,
    basketFind,
    del,
    korAdd
} = BasketSlice.actions;

export default BasketSlice.reducer;