import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import style from "./cardview.module.css"
import Button from '../../tools/Button';
import axios from 'axios';


import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPause } from "react-icons/fa";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";

import { useDispatch, useSelector } from 'react-redux';
import { add, getLocalData, minus, plusCount } from '../../redux/Slices/BasketSlice';



export default function CardView() {
  const { id } = useParams();
  const [card, setCard] = useState(null)
  const [imgIndex, setImgIndex] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { storageData } = useSelector(state => state.basket)


  function getCartData(data) {
    setCard(data)
    setImgIndex(data.allImgs[0])
  }

  function addStorege(params) {
    dispatch(add(params))
  }


  useEffect(() => {
    axios.get(`http://localhost:3000/homeCard/${id}`).then((data) => getCartData(data.data))
    dispatch(getLocalData())
  }, [id])

  return (
    <div className="container">
      {
        card ?
          <>
            <div className={style.showing_data}>
              <span onClick={() => navigate("/catalogs")}><Button word={card?.category?.length >= 20 ? card?.category.slice(0, 20) + "..." : card?.category} inlineStyle={{ border: "none" }} /></span>
              <span><IoIosArrowForward /></span>
              <span><Button word={card?.brand?.length >= 20 ? card?.brand.slice(0, 20) + "..." : card?.brand} inlineStyle={{ border: "none" }} /></span>
            </div>
            <div className={style.splitedCard1}>
              <div className={style.splited1}>

                <div className={style.allImgs}>
                  {card?.allImgs?.map((item, index) => {
                    if (/\.(jpg|jpeg|png|gif)$/i.test(item) || /th\.bing\.com\/.*OIP\./i.test(item)) {
                      // Agar rasm bo'lsa
                      return (
                        <div key={index} style={item === imgIndex ? { transform: "scale(1.07)", borderColor: "red" } : {}}><img src={item} style={item === imgIndex ? { transform: "scale(1.01)" } : {}} alt="product's img" onClick={() => setImgIndex(item)} /></div>
                      );
                    } else if (/\.(mp4|webm|ogg)$/i.test(item)) {
                      // Agar video bo'lsa
                      return (
                        <div key={index} style={item === imgIndex ? { transform: "scale(1.07)", borderColor: "red" } : {}} onClick={() => setImgIndex(item)}>
                          <video
                            src={item}
                            style={item === imgIndex ? { transform: "scale(1.01)" } : {}}
                            controls={false}
                          />
                          <span><FaPause /></span>
                        </div>

                      );
                    } else {
                      // Noma'lum format
                      return (
                        <p key={index} style={{ color: "red" }}>
                          Noma'lum fayl turi: {item}
                        </p>
                      );
                    }
                  })}
                </div>

                <div className={style.showingImg}>
                  {
                    (/\.(jpg|jpeg|png|gif)$/i.test(imgIndex) || /th\.bing\.com\/.*OIP\./i.test(imgIndex)) ?
                      <img src={imgIndex ? imgIndex : card.img} alt="card img" /> : (/\.(mp4|webm|ogg)$/i.test(imgIndex)) ? <video src={imgIndex} loop autoPlay controls controlsList='nodownload nofullscreen' /> : <p key={imgIndex} style={{ color: "red" }}>Noma'lum fayl turi:</p>
                  }


                  <div className={style.changeImg}>
                    <button onClick={() => card?.allImgs?.map((item, index) => item === imgIndex ? index > 0 ? setImgIndex(card?.allImgs[index - 1]) : setImgIndex(card?.allImgs[card.allImgs.length - 1]) : "")}><span><IoIosArrowBack /></span></button>
                    <button><span>{card.allImgs.map((p, i) => p === imgIndex ? i + 1 : "")} / {card.allImgs.length}</span></button>
                    <button onClick={() => card?.allImgs?.map((item, index) => item === imgIndex ? index < card?.allImgs?.length - 1 ? setImgIndex(card?.allImgs[index + 1]) : setImgIndex(card?.allImgs[0]) : "")}><span><IoIosArrowForward /></span></button>
                  </div>
                </div>
              </div>

              <div className={style.splited2}>
                <div className={style.marks}>
                  <div className={style.aware_of}>
                    <div>
                      {
                        card.bestseller ? <span>Бестселлер</span>
                          : ""
                      }
                      {
                        card.discount ? <p> -{card.discount}%</p>
                          : ""
                      }
                    </div>
                    <div className={style.id_key}>
                      Артикул: {card.id}
                    </div>
                  </div>
                  <p className={style.title}>{card.name}</p>
                  {
                    card.describtion.map((item, index) => (
                      <span key={index} className={style.information_card}>{item}</span>
                    ))
                  }
                  <div className={style.counting}>
                    <p className={style.price}>{card.price - card.price * (card.discount / 100)} {card.moneyType}</p>
                    {
                      storageData.some(i => i.id === card.id) ?
                        <>
                          <div className={style.product_count}>
                            <button disabled={storageData.find(i => i.id === card?.id ).count > 1 ? false : true} onClick={() => dispatch(minus({ id: card.id }))}><HiMiniMinus /></button>
                            <span>{storageData.map(i => i.id === card.id ? i.count : "")}</span>
                            <button disabled={storageData.find(i => i.id === card?.id ).count < card.inStock ? false : true} onClick={() => dispatch(plusCount({ id: card.id, max: card.inStock }))}><HiMiniPlus /></button>
                          </div>
                          <div className='cardBtn' style={{ backgroundColor: "rgb(243, 81, 76)" }} onClick={() => navigate("/basket")}>
                            <img src="../../../public/basket_white.svg" alt="" />
                            <span>на корзине</span>
                          </div>
                        </>
                        :
                        <div className='cardBtn' onClick={() => addStorege({ id: card.id, count: 1 })}>
                          <img src="../../../public/basket_white.svg" alt="" />
                          <span>В корзину</span>
                        </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </>
          :
          ""
      }

    </div>
  )
}
