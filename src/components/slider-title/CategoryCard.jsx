import React from 'react'
import style from "./comp-first.module.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { change } from '../../redux/Slices/FilterSlice'


export default function CategoryCard({ itemR }) {
    const navigateCat = useNavigate()
    const dispatch = useDispatch()
    function throwTo(params) {
        navigateCat("catalogs")
        dispatch(change(params))
    }

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
                                    item.categoriesType.length <= 10 ?
                                        item.categoriesType.map((c, i) => {
                                            return (
                                                <div key={i}>{c.name}</div>
                                            )
                                        })
                                        :
                                        item.categoriesType
                                            .slice(0, 10)
                                            .map((c, i) => {
                                                return (
                                                    <div key={i}>{c.name}</div>
                                                )
                                            })
                                }
                            </div>
                            <button onClick={() => throwTo(index)}><b>Смотреть все</b> <img src="/show.svg" alt="" /></button>
                        </div>
                    )
                })
            }
        </div>
    )
}
