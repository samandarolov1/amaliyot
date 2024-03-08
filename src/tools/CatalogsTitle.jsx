import React, { useEffect, useState } from 'react'
import style from "./tools.module.css"
import { useSelector } from 'react-redux'

export default function CatalogsTitle() {
    const { MainImg } = useSelector(state => state.filters)

    return (
        <div className={style.block}>
            <figure><img src={MainImg} alt="" /></figure>
        </div>
    )
}
