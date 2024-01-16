import React, { useEffect } from 'react'
import SimpleCarousel from '../../components/slider-title/Slider'
import Title from '../../components/slider-title/Title'
import CategoryCard from '../../components/slider-title/CategoryCard'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addCards, addCategory } from '../../redux/Slices/MainSlice'
import CardsComp from '../../components/card-bla-bla/CardsComp'



export default function Home() {
  const dispatch = useDispatch()
  const { isloading, categoriesShow, homeCard } = useSelector(state => state.main)
  useEffect(() => {
    axios.get("http://localhost:3000/categories")
      .then(arr => dispatch(addCategory(arr.data.shows)))

    axios.get("http://localhost:3000/homeCard")
      .then(arr => dispatch(addCards(arr.data)))
  }, [])

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
        <Title text={"Бестселлеры"} />
        <br /><br /><br />
        <CardsComp itemR={homeCard} toFilter={"bestseller"} />
        <br /><br /><br />
        <Title text={"Скидки недели"} />
        <br /><br /><br />
        <CardsComp itemR={homeCard} toFilter={"discount"} />
      </div>
  )
}
