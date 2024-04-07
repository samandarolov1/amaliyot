import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from "./togift.module.css"
export default function ToGift() {
    const { toGift } = useSelector(state => state.main)

    return (
        <div className={style.help__container}>
            <h1>{toGift?.title}</h1>
            <br /><br /><br />
            <div className="helps">
                {
                    toGift.informations?.map((item, ind) => (
                        <div className={style.help} key={item.id} id={ind % 2 === 0? style.flex : ""}>
                            <div className={style.helpImg}><img src={item.img} alt="" /></div>
                            <div className={style.words}>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

