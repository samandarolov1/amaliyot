import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import style from './themesetting.module.css'

import { changeTheme, handleTheme } from "../../../redux/Slices/Style"


// ## the export func

export default function ThemeSetting() {
    const dispatch = useDispatch()
    const { themes } = useSelector(state => state.theme)
  
  
    let [body_theme, setbody_theme] = useState({
        b_color: "",
        b_img: ""
    })
  
    return (
        <div className="container">
            <div className={style.chooseThemes}>
                {
                    themes.map(i => (
                        <button key={i.id} style={{ display: "block", paddingTop: "2px", paddingLeft: "6px", paddingRight: "6px", width: "120px", border: "0.5px solid black", borderRadius: "10px", height: "25px", background: i.color, margin: "5px 10px", color: i.textColor || "black", }} onClick={() => dispatch(changeTheme(i.id))}>{i.name}</button>
                    ))
                }
            </div>
            <div className={style.tochange}>
                <div>
                    <p>Change body picture</p>
                    <br />
                    <input type="file" onChange={(i) => setbody_theme({ b_img: URL.createObjectURL(i.target.files[0]) })} />
                </div>


                <br />
                <button onClick={() => dispatch(handleTheme(body_theme))}>save</button>
            </div>
        </div>
    )
}
