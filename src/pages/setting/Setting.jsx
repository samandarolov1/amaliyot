import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import style from "./setting.module.css"
export default function Setting() {
    const navigate = useNavigate()

    return (
            <div  className='container'>
              <Link style={{display: "block", width:"100%", height: "50px", backgroundColor: "rgb(233, 236, 236)", textAlign: "center", padding: "5px", fontSize: "30px", border:"1px solid blue", borderRadius: "15px", margin: "10px"}} to={"/setting/theme"}>Theme</Link>
              <Link style={{display: "block", width:"100%", height: "50px", backgroundColor: "rgb(233, 236, 236)", textAlign: "center", padding: "5px", fontSize: "30px", border:"1px solid blue", borderRadius: "15px", margin: "10px"}} to={"/setting/privatedata"}>Private</Link>
              <Link style={{display: "block", width:"100%", height: "50px", backgroundColor: "rgb(233, 236, 236)", textAlign: "center", padding: "5px", fontSize: "30px", border:"1px solid blue", borderRadius: "15px", margin: "10px"}} to={"/setting/helpcenter"}>Help</Link>
            </div>
    )
}
