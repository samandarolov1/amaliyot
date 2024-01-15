import React from 'react'
import style from "./comp-first.module.css"
import { useNavigate } from 'react-router-dom'


export default function CategoryCard({ itemR }) {
    const navigateCat = useNavigate()
    return (
        <div className={style.cardB}>
            {
                itemR.map((item, index) => {
                    return (
                        <div className={style.card} key={item.id}>
                            <figure>
                                <img src="{item.img}" alt="" />
                            </figure>
                            <div>
                                <p>{item.mainTitle}</p>
                                {
                                    // item.length < 9 ?
                                    item.categoriesType.map((c, i) => {
                                        return (
                                            <div key={i}>{c.name}</div>
                                        )
                                    })
                                    // : ""
                                }
                            </div>
                            <button onClick={() => navigateCat("catalogs")}><b>Смотреть все</b> <img src="/show.svg" alt="" /></button>
                        </div>
                    )
                })
            }
        </div>
    )
}
