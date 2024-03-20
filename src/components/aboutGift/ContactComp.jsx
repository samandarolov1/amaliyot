import React, { useEffect } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { PiEnvelopeSimpleOpenFill } from "react-icons/pi";
import style from "./togift.module.css"
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getContactDatas } from '../../redux/Slices/MainSlice';



export default function ContactComp() {
    const { contactDatas } = useSelector(state => state.main)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get("http://localhost:3000/contactDatas")
            .then((arr) => dispatch(getContactDatas(arr.data)))
    }, [])

    return (
        <div className={style.location}>
            <div className={style.location__two}>
                <div className={style.location__desc}>
                    <h1>{contactDatas.titleName}</h1>
                    <h2>{contactDatas.desc}</h2>
                    <div className="contact">
                        <div className={style.contact__cover}> <div> <span><FaLocationDot />  </span></div>{contactDatas.stret}</div>
                        <div className={style.contact__cover}> <div> <span><IoCall /> </span></div>{contactDatas.phoneNum}</div>
                        <div className={style.contact__cover}> <div> <span><PiEnvelopeSimpleOpenFill /> </span></div>{contactDatas.contactEmail
                        }</div>
                    </div>
                </div>
                <div className={style.location__map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.8879149622244!2d37.840587876787595!3d55.93398097315187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b52dfb59d907e5%3A0xdcc3971af78fe45f!2z0YPQuy4g0JvQtdGB0L3QsNGPLCAxMiwg0JrQvtGA0L7Qu9GR0LIsINCc0L7RgdC60L7QstGB0LrQsNGPINC-0LHQuy4sINCg0L7RgdGB0LjRjywgMTQxMDky!5e0!3m2!1sru!2s!4v1705417698618!5m2!1sru!2s" style={{ border: "0" }} allowFullScreen="" loading="async" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}
