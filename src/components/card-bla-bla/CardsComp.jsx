import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { add, getLocalData } from "../../redux/Slices/BasketSlice"

export default function CardsComp({ itemR }) {
    const dispatch = useDispatch()
    const { storageData } = useSelector(state => state.basket)
    async function addStorege(params) {
        dispatch(add(params))
        dispatch(getLocalData())
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
                                    <div className='cardBtn'>
                                        <img src="basket_white.svg" alt="" />
                                        <span>на корзине</span>
                                    </div>
                                    :
                                    <div className='cardBtn' onClick={() => addStorege(item.id)}>
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