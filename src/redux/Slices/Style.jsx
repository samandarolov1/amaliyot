import { createSlice } from "@reduxjs/toolkit";



let theme2 = {
    navbar: {
        part1: {
            backColor: "rgb(224, 173, 173)",
            textColor: "white",
            iconColor: "white"
        },
        part2: {
            backColor: "rgb(221, 126, 126)",
            textColor: "white",
            iconColor: "white"
        }
    },
    body: {
        bodyColor: "rgb(224, 173, 173, 0.3)",
        bodyImg: ""
    },
    footer: {
        backColor: "rgb(221, 126, 126)"
    }
}, theme3 = {
    navbar: {
        part1: {
            backColor: "rgb(90, 211, 90)",
            textColor: "white",
            iconColor: "white"
        },
        part2: {
            backColor: "rgb(25, 182, 25)",
            textColor: "white",
            iconColor: "white"
        }
    },
    body: {
        bodyColor: "rgb(108, 250, 108, 0.6)",
        bodyImg: ""
    },
    footer: {
        backColor: "rgb(25, 182, 25)"
    }
}, theme4 = {
    navbar: {
        part1: {
            backColor: "rgb(167, 38, 38, 0.7)",
            textColor: "white",
            iconColor: "white"
        },
        part2: {
            backColor: "brown",
            textColor: "white",
            iconColor: "white"
        }
    },
    body: {
        bodyColor: "rgb(167, 38, 38, 0.2)",
        bodyImg: ""
    },
    footer: {
        backColor: "brown"
    }
}

let themes = [
    {
        id: 1,
        theme: {},
        name: "default",
        color: ""
    },
    {
        id: 2,
        theme: theme2,
        name: "red",
        color: "red",
        textColor: "white"
    },
    {
        id: 3,
        theme: theme3,
        name: "green",
        color: "green",
        textColor: "white"
    },
    {
        id: 4,
        theme: theme4,
        name: "brown",
        color: "brown",
        textColor: "white"
    }
]

const initialState = {
    currentTheme: {},
    themes
}

const StyleSlice = createSlice({
    name: "styleSlice",
    initialState,
    reducers: {
        changeTheme: (state, actions) => {
            state.currentTheme = themes.filter(i => i.id === actions.payload)[0].theme
            // console.log(state.currentTheme);
        },
        handleTheme: (state, actions) => {
            let h_theme = {
                navbar: state.currentTheme.navbar,
                footer: state.currentTheme.footer,
                body: {
                    bodyColor: actions.payload?.b_color,
                    bodyImg: actions.payload?.b_img
                }
            }
            state.currentTheme = h_theme
        }
    }
})

export const {
    changeTheme,
    handleTheme
} = StyleSlice.actions;

export default StyleSlice.reducer;