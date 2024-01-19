import React, { useEffect } from 'react'
import SimpleCarousel from '../../components/slider-title/Slider'
import Title from '../../components/slider-title/Title'
import CategoryCard from '../../components/slider-title/CategoryCard'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addCards, addCategory, addComforts } from '../../redux/Slices/MainSlice'
import CardsComp from '../../components/card-bla-bla/CardsComp'
import Comforts from '../../components/card-bla-bla/Comforts'
import style from "./home.module.css"


export default function Home() {
  const { isloading, categoriesShow, homeCard, comforts } = useSelector(state => state.main)

  return (
    isloading ? "" :
      <div className='container'>
        <Title text={"Каталог товаров"} classname={"catalogItems"} inlineStyle={{ marginTop: "50px" }} />
        <br /><br /><br />
        <CategoryCard itemR={categoriesShow} />
        <br /><br /><br />
        <Title text={"Надувные шары"} />
        <br /><br /><br />
        <CardsComp itemR={homeCard} toFilter={"shar"} />
        <br /><br /><br />
        <div className={style.adds}><p>элитные шары</p> <span>со скидкой 50%</span></div>
        <br /><br /><br />
        <Title text={"Бестселлеры"} />
        <br /><br /><br />
        <CardsComp itemR={homeCard} toFilter={"bestseller"} />
        <br /><br /><br />
        <Title text={"Скидки недели"} />
        <br /><br /><br />
        <CardsComp itemR={homeCard} toFilter={"discount"} />
        <br /><br /><br />
        <Title text={"Как приобрести товары в нашем интернет-магазине"} />
        <br /><br /><br />
        <Comforts itemR={comforts} />
      </div>
  )
}
