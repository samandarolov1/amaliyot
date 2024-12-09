import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function CardsComp({ itemR }) {
    const navigate = useNavigate()

    const { storageData } = useSelector(state => state.basket)


    return (
        <div className="cardlock">
            {
                itemR
                    .map(item => (
                        <div className="cardsR" key={item.id}>
                            <figure>
                                <img src={item.img} alt="img" />
                            </figure>
                            <div className="cardNews">
                                {
                                    item.bestseller ? <span>Бестселлер</span>
                                        : ""
                                }
                                {
                                    item.discount ? <p> -{item.discount}%</p>
                                        : ""
                                }
                            </div>
                            <p>{item.price} {item.moneyType}</p>
                            <b style={{ cursor: "pointer" }}>
                                <p>{item.name}</p>
                                <span>артикул  {item.id} </span>
                            </b>
                            {
                                storageData.some(i => i.id === item.id) ?
                                    <div className="cardBTN_container">
                                        <div className='cardBtn' style={{ backgroundColor: "#2DAFB9" }} onClick={() => navigate("/basket")}>
                                            <img src="basket_white.svg" alt="" />
                                            <span>на корзине</span>
                                        </div>
                                    </div>
                                    :
                                    <div className='cardBtn' onClick={() => navigate(`/catalogs/cards/${item.id}`)}>
                                        <img src="basket_white.svg" alt="" />
                                        <span>посмотреть</span>
                                    </div>
                            }
                        </div>
                    ))
            }
        </div>
    )
}