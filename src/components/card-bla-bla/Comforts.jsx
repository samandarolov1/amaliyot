import React from 'react'
import style from "./cards.module.css"

export default function Comforts({ itemR }) {
    return (
        <div className={style.comfBlock}>
            {
                itemR.map((item, ind) => (
                    <div className={style.comforts} key={item.id}>
                        <figure >
                            <span>{ind + 1}</span>
                        </figure>
                        <div>
                            <p>{item.title}</p>
                            <span>{item.body}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
