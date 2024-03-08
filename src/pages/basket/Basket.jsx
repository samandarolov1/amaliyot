import React, { useEffect, useState } from 'react'
import style from "./basket.module.css"
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { basketFind, getLocalData } from '../../redux/Slices/BasketSlice'
import BasketCards from './BasketCards'
export default function Basket() {
  const { basketCard, coming } = useSelector(state => state.basket)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLocalData())
    axios.get("http://localhost:3000/homeCard")
      .then(arr => dispatch(basketFind({ data: arr.data })))
  }, [])

  return (
    <div className="container">
      {
        basketCard.length > 0 ?
          <BasketCards itemR={basketCard} />
          :
          <div className={style.emptyBasket}>
            <div><img src="shopping-cart.png" alt="" /></div>
            <div>
              <h1> В корзине пока пусто</h1>
              <h6><NavLink to={'/'}>B Каталог</NavLink></h6>
            </div>
          </div>
      }
    </div>
  )
}
