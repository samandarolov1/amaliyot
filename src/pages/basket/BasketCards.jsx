import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { del, korAdd } from "../../redux/Slices/BasketSlice"

export default function BasketCards({ itemR }) {
    const dispatch = useDispatch()
    const { storageData } = useSelector(state => state.basket)
    async function delStorege(params) {
        dispatch(del(params))
    }

    async function needAdd(params) {
        dispatch(korAdd(params))
    }

    return (
        <div className="cardlock">
            {
                itemR
                    .map(item => (
                        <div className="cardsR" key={item.id}>
                            <figure>
                                <img src={item.img} alt="" />
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
                                <span>{item.artickul.name}  {item.artickul.type} </span>
                            </b>
                            {
                                storageData.includes(item.id) ?
                                    <div className='cardBtn' style={{ backgroundColor: "red" }} onClick={() => delStorege(item.id)}>
                                        <img src="basket_white.svg" alt="" />
                                        <span>Delete</span>
                                    </div>
                                    :
                                    <div className='cardBtn' onClick={() => needAdd(item.id)}>
                                        <img src="basket_white.svg" alt="" />
                                        <span>В корзину</span>
                                    </div>
                            }
                        </div>
                    ))
            }
        </div>
    )
}