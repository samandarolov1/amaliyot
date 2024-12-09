import { createSlice } from "@reduxjs/toolkit";

// Utility function for updating localStorage
const updateLocalStorage = (data) => {
    localStorage.setItem("basketId", JSON.stringify(data));
};

const initialState = {
    basketCard: [],
    coming: true,
    storageData: []
};

const BasketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        add: (state, action) => {
            state.coming = true;

            if (!state.storageData.some(item => item.id === action.payload.id)) {
                localStorage.setItem("basketId", JSON.stringify([...state.storageData, action.payload]))
                state.storageData = [...state.storageData, action.payload];
            }
            state.coming = false;
        },
        plusCount:  (state, action) => {
                state.storageData =  state.storageData.map(i => i.id === action.payload.id ? {id: i.id, count: i.count < action.payload.max ? i.count + 1 : i.count} : i )
                localStorage.setItem("basketId", JSON.stringify(state.storageData))
            },
        minus: (state, action) => {
            state.storageData =  state.storageData.map(i => i.id === action.payload.id ? {id: i.id, count: i.count > 1 ? i.count - 1 : 1} : i )
            localStorage.setItem("basketId", JSON.stringify(state.storageData))
        },
        getLocalData: (state) => {
            state.coming = false;
            state.storageData = JSON.parse(localStorage.getItem("basketId")) || [];
        },
        basketFind: (state, action) => {
            const { data } = action.payload;

            state.basketCard = data.filter(i =>
                state.storageData.some(item => item.id === i.id)
            );

            state.coming = false;
        },
        del: (state, action) => {
            if (state.storageData.some(item => item.id === action.payload)) {
                state.storageData = state.storageData.filter(i => i.id !== action.payload);
                localStorage.setItem("basketId", JSON.stringify(state.storageData))
            }
        },
        korAdd: (state, action) => {
            if (!state.storageData.some(item => item.id === action.payload.id)) {
                state.storageData = [...state.storageData, {id: action.payload.id, count: 1}];
                updateLocalStorage(state.storageData);
            }
        }
    }
});

export const {
    add,
    getLocalData,
    basketFind,
    del,
    plusCount,
    korAdd,
    minus
} = BasketSlice.actions;

export default BasketSlice.reducer;
