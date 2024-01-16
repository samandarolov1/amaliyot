import React from 'react'
import style from "./cards.module.css"
import Button from '../../tools/Button'
export default function CardsComp({ itemR, toFilter, }) {


    function sarala(i) {
        if (toFilter !== "" || toFilter) {
            if (toFilter === "bestseller" && i.bestseller) {
                return true
            }
            else if (toFilter === "discount" && i.discount > 0) {
                return true
            }
            else {
                if (toFilter === i.category) {
                    return true
                }
            }
        } else {
            return true
        }
    }

    return (
        <div className={style.cardlock}>
            {
                itemR
                    .filter(i => sarala(i))
                    .slice(0, 8)
                    .map(item => (
                        <div className={style.cardsR} key={item.id}>
                            <figure>
                                <img src="{item.img}" alt="" />
                            </figure>
                            <div>
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
                            <b>
                                <p>{item.name}</p>
                                <span>{item.artickul.name}  {item.artickul.type} </span>
                            </b>
                            <Button word={"В корзину"} wordImg={"/basket_white.svg"} className={"cardBtn"} />
                        </div>
                    ))
            }
        </div>
    )
}
