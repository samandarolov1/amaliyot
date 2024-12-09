import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { del, korAdd, minus, plusCount } from "../../redux/Slices/BasketSlice"
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";

export default function BasketCards({ itemR }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
                                <span>артикул  {item.id} </span>
                            </b>
                            <div className="product_count">
                            <button disabled={storageData.find(i => i.id === item?.id ).count > 1 ? false : true} onClick={() => dispatch(minus({ id: item.id }))}><HiMiniMinus /></button>
                            <span>{storageData.map(i => i.id === item.id ? i.count : "")}</span>
                            <button disabled={storageData.find(i => i.id === item?.id ).count < item.inStock ? false : true} onClick={() => dispatch(plusCount({ id: item.id, max: item.inStock }))}><HiMiniPlus /></button>
                          </div>
                            {
                                storageData.some(i => i.id === item.id) ?
                                    <div className="cardBTN_container">
                                        <div className='cardBtn' onClick={() => navigate(`/catalogs/cards/${item.id}`)}>
                                            <img src="/public/basket_white.svg" alt="" />
                                            <span>посмотреть</span>
                                        </div>
                                        <div className='cardBtn' style={{ backgroundColor: "red" }} onClick={() => delStorege(item.id)}>
                                            <span><FaTrashAlt /></span>
                                            <span>Delete</span>
                                        </div>
                                    </div>
                                    :
                                    <div className='cardBtn' onClick={() => needAdd(item)}>
                                        <img src="/public/basket_white.svg" alt="" />
                                        <span>В корзину</span>
                                    </div>
                            }
                        </div>
                    ))
            }
        </div>
    )
}