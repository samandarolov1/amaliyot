import React from 'react'
import style from "./comp-first.module.css"
export default function Title({text, inlineStyle, classname}) {
  return (
    <h2 className={style.classname} style={inlineStyle}>{text}</h2>
  )
}
