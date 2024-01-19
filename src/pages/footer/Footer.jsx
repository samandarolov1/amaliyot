import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import style from "./footer.module.css"
export default function Footer() {
    return (
        <footer className={style.tagFooter}>
            <div className={style.footer}>
                <div className="container">
                    <div className={style.footer__nav}>
                        <ul>
                            <li><NavLink to={'/'}>Главная</NavLink></li>
                            <li><NavLink to={'service'}>Услуги</NavLink></li>
                            <li><NavLink to={'delivery'}>Доставка и оплата</NavLink></li>
                            <li><NavLink to={'about'}>О нас</NavLink></li>
                            <li><NavLink to={'discount'}>Акции</NavLink></li>
                            <li><NavLink to={"blog"}>Блог</NavLink></li>
                            <li><NavLink to={'contact'}>Контакты</NavLink></li>
                        </ul>
                    </div>
                    <div className={style.footer__div}>
                        <div>
                            <ul>
                                <li>Воздушные шары из латекса</li>
                                <li><NavLink>Круглые без рисунка</NavLink></li>
                                <li><NavLink>Круглые с рисунком</NavLink></li>
                                <li><NavLink>Для моделирования</NavLink></li>
                                <li><NavLink>Сердца</NavLink></li>
                                <li><NavLink>Для упаковки</NavLink></li>
                                <li><NavLink>Линколуны</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Воздушные шары из фольги</li>
                                <li><NavLink>Decco Bubble</NavLink></li>
                                <li><NavLink>3D-фигуры</NavLink></li>
                                <li><NavLink>Шары-самодувы</NavLink></li>
                                <li><NavLink>Оформительские без рисунка</NavLink></li>
                                <li><NavLink>Сердца, круги, звёзды</NavLink></li>
                                <li><NavLink>Фигурные</NavLink></li>
                                <li><NavLink>Цифры</NavLink></li>
                                <li><NavLink>Буквы, надписи</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Товары для праздника</li>
                                <li><NavLink>Посуда</NavLink></li>
                                <li><NavLink>Свечи</NavLink></li>
                                <li><NavLink>Хлопушки</NavLink></li>
                                <li><NavLink>Гирлянды</NavLink></li>
                                <li><NavLink>Фотозона</NavLink></li>
                                <li><NavLink>Конфетти, пенопласт, серпантин</NavLink></li>
                                <li><NavLink>Карнавальная косметика</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Оборудование, инструменты</li>
                                <li><NavLink>Клей для шаров</NavLink></li>
                                <li><NavLink>Светодиодная подсветка</NavLink></li>
                                <li><NavLink>Печать на шарах</NavLink></li>
                                <li><NavLink>Компрессоры, насосы</NavLink></li>
                                <li><NavLink>Полироль для шаров</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Упаковка</li>
                                <li><NavLink>Пакеты</NavLink></li>
                                <li><NavLink>Коробки</NavLink></li>
                                <li><NavLink>Банты</NavLink></li>
                                <li><NavLink>Ленты</NavLink></li>
                                <li><NavLink>Упаковочная бумага</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={style.footer__footer}>
                    <div>© 2022 ООО «Салон Сюрприз». ОГРН 39483948320. Политика обработки персональных данных</div>
                    <div>
                        <div className={style.navbar__link}>
                            <div><FaInstagramSquare /></div>
                            <div><FaSquareWhatsapp /></div>
                            <div><FaTelegram /></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
