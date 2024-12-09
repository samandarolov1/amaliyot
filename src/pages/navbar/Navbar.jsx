import React, { useEffect } from 'react'
import style from "./navbar.module.css"
import { FaLocationDot, FaTelegram } from "react-icons/fa6";
import { FaInstagramSquare, FaWhatsappSquare, FaPhone } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showInput, showNavbar } from '../../redux/Slices/MainSlice';
import { doFilter } from '../../redux/Slices/FilterSlice';

import { FaUserAlt } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";


export default function Navbar() {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { navShow, inputShow } = useSelector(state => state.main)
    const { currentTheme } = useSelector(state => state.theme)
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
            <div className={style.navbar1} style={{ background: currentTheme?.navbar?.part1?.backColor }}>
                <div className="container">
                    <div className={style.location} ><Link to={"contact"} style={{ color: currentTheme?.navbar?.part1?.textColor }}><span style={{ color: currentTheme?.navbar?.part1?.iconColor }}><FaLocationDot /> </span> г. Королёв, Лесная 12, ТРЦ Вертикаль</Link></div>
                    <div className={style.df}>
                        <div >
                            <span><Link style={{ color: currentTheme?.navbar?.part1?.iconColor }} to={"contact"}><FaInstagramSquare /></Link></span>
                            <span><Link style={{ color: currentTheme?.navbar?.part1?.iconColor }} to={"contact"}><FaWhatsappSquare /></Link></span>
                            <span><Link style={{ color: currentTheme?.navbar?.part1?.iconColor }} to={"contact"}><FaTelegram /></Link></span>
                            <span><Link style={{ color: currentTheme?.navbar?.part1?.iconColor }} to={"contact"}><FaWhatsappSquare /></Link></span>
                        </div>
                        <div className={style.phone}>
                            <Link to={"contact"}style={{ color: currentTheme?.navbar?.part1?.iconColor }}><FaPhone /> <span style={{ color: currentTheme?.navbar?.part1?.textColor }}> +7(903) 014-87-25</span></Link>
                            <Link to={"contact"}style={{ color: currentTheme?.navbar?.part1?.iconColor }}><FaPhone /> <span style={{ color: currentTheme?.navbar?.part1?.textColor }}> +8(800) 237-24-75</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.navbar2} style={{background: currentTheme?.navbar?.part2.backColor}}>
                <div className="container">
                    <div><NavLink to={"/"} style={screenjs > 710 ? { display: "block" } : inputShow ? { display: "none" } : { display: "block" }}><img className={style.logo} src="/logo.png" alt="" /></NavLink></div>
                    <div>
                        <button className={style.bars} onClick={() => dispatch(showNavbar())}><img src='katalog.svg' style={screenjs > 710 ? screenjs <= 992 ? { display: "block" } : { display: "none" } : inputShow ? { display: "none" } : { display: "block" }} /></button>
                        {
                            navShow ?
                                <div className={style.showAll}>
                                    <div className={style.navA}>
                                        <div>
                                            <NavLink style={{ color: currentTheme?.navbar?.part2?.textColor }} onClick={() => dispatch(showNavbar())} to={"/"}>дом</NavLink>
                                            <NavLink style={{ color: currentTheme?.navbar?.part2?.textColor }} onClick={() => dispatch(showNavbar())} to={"catalogs"}> Каталог</NavLink>
                                            <NavLink style={{ color: currentTheme?.navbar?.part2?.textColor }} onClick={() => dispatch(showNavbar())} to={"service"}>Услуги</NavLink>
                                            <NavLink style={{ color: currentTheme?.navbar?.part2?.textColor }} onClick={() => dispatch(showNavbar())} to={"delivery"}>Доставка и оплата</NavLink>
                                            <NavLink style={{ color: currentTheme?.navbar?.part2?.textColor }} onClick={() => dispatch(showNavbar())} to={"about"}>О нас</NavLink>
                                            <NavLink style={{ color: currentTheme?.navbar?.part2?.textColor }} onClick={() => dispatch(showNavbar())} to={"discount"}>Акции</NavLink>
                                            <NavLink style={{ color: currentTheme?.navbar?.part2?.textColor }} onClick={() => dispatch(showNavbar())} to={"blog"}>Блог</NavLink>
                                            <NavLink style={{ color: currentTheme?.navbar?.part2?.textColor }} onClick={() => dispatch(showNavbar())} to={"contact"}>Контакты</NavLink>

                                        </div>
                                    </div>
                                    <div onClick={() => dispatch(showNavbar())} className={style.yopar}></div>
                                </div>
                                :
                                <div className={style.links}>
                                    <NavLink style={{ color: currentTheme?.navbar?.part2?.textColor }} to={"catalogs"}> Каталог</NavLink>
                                    <NavLink style={{ color: currentTheme?.navbar?.part2?.textColor }} to={"service"}>Услуги</NavLink>
                                    <NavLink style={{ color: currentTheme?.navbar?.part2?.textColor }} to={"delivery"}>Доставка и оплата</NavLink>
                                    <NavLink style={{ color: currentTheme?.navbar?.part2?.textColor }} to={"about"}>О нас</NavLink>
                                    <NavLink style={{ color: currentTheme?.navbar?.part2?.textColor }} to={"discount"}>Акции</NavLink>
                                    <NavLink style={{ color: currentTheme?.navbar?.part2?.textColor }} to={"blog"}>Блог</NavLink>
                                    <NavLink style={{ color: currentTheme?.navbar?.part2?.textColor }} to={"contact"}>Контакты</NavLink>
                                </div>
                        }
                        <label className={style.search}>
                            <input type="text" onChange={(e) => throwToSearch(e)} name='searchWord' style={inputShow ? { display: "block" } : screenjs <= 710 ? { display: "none" } : { display: "block" }} />
                            <button onClick={() => dispatch(showInput())}><img src="/search_icon.svg" alt="" /></button>
                        </label>
                    </div>
                    <div className={style.profil}>
                        <div>
                            <NavLink to={"setting"} style={screenjs > 710 ? { display: "block" } : inputShow ? { display: "none" } : { display: "block" }}>
                                <span style={{ color: currentTheme?.navbar?.part2?.iconColor || "blue", marginLeft: "13px"}}><FaUserAlt /></span>
                                <p style={{ color: currentTheme?.navbar?.part2?.textColor }}>Профиль</p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to={"basket"} style={screenjs > 710 ? { display: "block" } : inputShow ? { display: "none" } : { display: "block" }}>
                                <span style={{ color: currentTheme?.navbar?.part2?.iconColor || "blue", marginLeft: "9px" }}><LuShoppingCart /></span>
                                <p style={{ color: currentTheme?.navbar?.part2?.textColor }}>Корзина</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
