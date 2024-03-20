import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBlogC } from '../../redux/Slices/MainSlice';
import "./blog.css"


export default function Blog() {
  const { blogC } = useSelector(state => state.main);
  const dispatch = useDispatch()
  const [category, setCategory] = useState("all")

  useEffect(() => {
    async function getFlatted() {
      try {
        const { data } = await axios.get(`http://localhost:3000/blog`)
        dispatch(addBlogC(data))
      } catch (error) {
        console.log(error);
      }
    }
    getFlatted()
  }, [dispatch])
  return (
    <div className='blog__container'>
      <h1>Блог</h1>
      <h2>Пишем о товарах для праздника, интересных мероприятиях и фестивалях.</h2>
      <div className="blog__buttons">
        <div><button onClick={() => setCategory("all")}>#Bce записи</button></div>
        <div><button onClick={() => setCategory("#Продукция")}>#Продукция</button></div>
        <div><button onClick={() => setCategory("#Фестивали")}>#Фестивали</button></div>
        <div><button onClick={() => setCategory("#Приключения")}>#Приключения</button></div>
      </div>
      <div className="flated__container">
        {
          blogC
            .filter(item => {
              if (category === "all") { return item }
              else if (category === item.category || category === item.category2) { return item }
            }).map((item) => (
              <div className="flatedC">
                <div className="flated__header"><img src={item.img} alt="" /></div>
                <div className="flated__body">
                  <h2>{item.title}</h2>
                  <h3>{item.desc}</h3>
                </div>
                <div className="flated__footer blog__footer">
                  <div style={{ padding: "5px 8px" }}>{item.category}</div>
                  <div>{item.category2 ? (<div style={{ padding: "5px 8px" }}>{item.category2}</div>) : null}</div>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  )
}
