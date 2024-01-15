import React from 'react'
import style from "./navbar.module.css"
import { FaLocationDot, FaTelegram } from "react-icons/fa6";
import { FaInstagramSquare, FaWhatsappSquare, FaPhone } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {
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
                        <div className={style.bars}><img src='katalog.svg' /></div>
                        <div className={style.links}>
                            <NavLink to={"catalogs"}> Каталог</NavLink>
                            <NavLink to={"service"}>Услуги</NavLink>
                            <NavLink to={"delivery"}>Доставка и оплата</NavLink>
                            <NavLink to={"about"}>О нас</NavLink>
                            <NavLink to={"discount"}>Акции</NavLink>
                            <NavLink to={"blog"}>Блог</NavLink>
                            <NavLink to={"contact"}>Контакты</NavLink>
                        </div>
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
