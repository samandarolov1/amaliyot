import React, { useEffect } from 'react'
import SimpleCarousel from '../../components/slider-title/Slider'
import Title from '../../components/slider-title/Title'
import CategoryCard from '../../components/slider-title/CategoryCard'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../../redux/Slices/MainSlice'



export default function Home() {
  const dispatch = useDispatch()
  const { isloading, categoriesShow } = useSelector(state => state.main)
  useEffect(() => {
    axios.get("http://localhost:3000/categories")
      .then(arr => dispatch(addCategory(arr.data.shows)))
  }, [])
  // console.log(categoriesShow);

  return (
    isloading ? "" :
      <div className='container'>
        <Title text={"Каталог товаров"} classname={"catalogItems"} inlineStyle={{ marginTop: "50px" }} />
        <br /><br /><br />
        <CategoryCard itemR={categoriesShow} />
      </div>
  )
}
