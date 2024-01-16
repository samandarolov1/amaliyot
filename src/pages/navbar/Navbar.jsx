import React from 'react'
import style from "./navbar.module.css"
import { FaLocationDot, FaTelegram } from "react-icons/fa6";
import { FaInstagramSquare, FaWhatsappSquare, FaPhone } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showNavbar } from '../../redux/Slices/MainSlice';
export default function Navbar() {
    const dispatch = useDispatch()
    const { navShow } = useSelector(state => state.main)
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
                    <div><NavLink to={"/"}><img className={style.logo} src="/logo.png" alt="" /></NavLink></div>
                    <div>
                        <div className={style.bars} onClick={() => dispatch(showNavbar())}><img src='katalog.svg' /></div>
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
                            <input type="text" />
                            <div><img src="/search_icon.svg" alt="" /></div>
                        </label>
                    </div>
                    <div className={style.profil}>
                        <div>
                            <NavLink>
                                <img src="/user.svg" alt="" />
                                <p>Профиль</p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to={"basket"}>
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
