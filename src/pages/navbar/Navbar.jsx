import React, { useEffect, useState } from 'react'
import style from "./navbar.module.css"
import { FaLocationDot, FaTelegram } from "react-icons/fa6";
import { FaInstagramSquare, FaWhatsappSquare, FaPhone } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showInput, showNavbar } from '../../redux/Slices/MainSlice';
import { doFilter } from '../../redux/Slices/FilterSlice';
export default function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { navShow, inputShow } = useSelector(state => state.main)

    function throwToSearch(e) {
        navigate("catalogs")
        dispatch(doFilter({ name: e.target.name, value: e.target.value }))
    }
    let screenjs = window.window.screen.width
    useEffect(() => {
        screenjs = window.window.screen.width
    }, [inputShow])

    return (
        <nav>
            <div className={style.navbar1}>
                <div className="container">
                    <div className={style.location}><Link to={"contact"}><span><FaLocationDot /> </span> г. Королёв, Лесная 12, ТРЦ Вертикаль</Link></div>
                    <div className={style.df}>
                        <div >
                            <span><Link to={"contact"}><FaInstagramSquare /></Link></span>
                            <span><Link to={"contact"}><FaWhatsappSquare /></Link></span>
                            <span><Link to={"contact"}><FaTelegram /></Link></span>
                            <span><Link to={"contact"}><FaWhatsappSquare /></Link></span>
                        </div>
                        <div className={style.phone}>
                            <Link to={"contact"}><FaPhone /> <span> +7(903) 014-87-25</span></Link>
                            <Link to={"contact"}><FaPhone /> <span> +8(800) 237-24-75</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.navbar2}>
                <div className="container">
                    <div><NavLink to={"/"} style={screenjs > 710 ? { display: "block" } : inputShow ? { display: "none" } : { display: "block" }}><img className={style.logo} src="/logo.png" alt="" /></NavLink></div>
                    <div>
                        <div className={style.bars} onClick={() => dispatch(showNavbar())}><img src='katalog.svg' style={screenjs > 710 ? screenjs <= 992 ? { display: "block" } : { display: "none" } : inputShow ? { display: "none" } : { display: "block" }} /></div>
                        {
                            navShow ?
                                <div className={style.showAll}>
                                    <div className={style.navA}>
                                        <div>
                                            <NavLink onClick={() => dispatch(showNavbar())} to={"/"}>дом</NavLink>
                                            <NavLink onClick={() => dispatch(showNavbar())} to={"catalogs"}> Каталог</NavLink>
                                            <NavLink onClick={() => dispatch(showNavbar())} to={"service"}>Услуги</NavLink>
                                            <NavLink onClick={() => dispatch(showNavbar())} to={"delivery"}>Доставка и оплата</NavLink>
                                            <NavLink onClick={() => dispatch(showNavbar())} to={"about"}>О нас</NavLink>
                                            <NavLink onClick={() => dispatch(showNavbar())} to={"discount"}>Акции</NavLink>
                                            <NavLink onClick={() => dispatch(showNavbar())} to={"blog"}>Блог</NavLink>
                                            <NavLink onClick={() => dispatch(showNavbar())} to={"contact"}>Контакты</NavLink>

                                        </div>
                                    </div>
                                    <div onClick={() => dispatch(showNavbar())} className={style.yopar}></div>
                                </div>
                                :
                                <div className={style.links}>
                                    <NavLink to={"catalogs"}> Каталог</NavLink>
                                    <NavLink to={"service"}>Услуги</NavLink>
                                    <NavLink to={"delivery"}>Доставка и оплата</NavLink>
                                    <NavLink to={"about"}>О нас</NavLink>
                                    <NavLink to={"discount"}>Акции</NavLink>
                                    <NavLink to={"blog"}>Блог</NavLink>
                                    <NavLink to={"contact"}>Контакты</NavLink>
                                </div>
                        }
                        <label className={style.search}>
                            <input type="text" onChange={(e) => throwToSearch(e)} name='searchWord' style={inputShow ? { display: "block" } : screenjs <= 710 ? { display: "none" } : { display: "block" }} />
                            <div onClick={() => dispatch(showInput())}><img src="/search_icon.svg" alt="" /></div>
                        </label>
                    </div>
                    <div className={style.profil}>
                        <div>
                            <NavLink style={screenjs > 710 ? { display: "block" } : inputShow ? { display: "none" } : { display: "block" }}>
                                <img src="/user.svg" alt="" />
                                <p>Профиль</p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to={"basket"} style={screenjs > 710 ? { display: "block" } : inputShow ? { display: "none" } : { display: "block" }}>
                                <img src="/basket_icon.svg" alt="" />
                                <p>Корзина</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
