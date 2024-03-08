import React from 'react'
import style from "./delivery.module.css"
export default function Delivery() {
  return (
    <div className='container'>
      <div className={style.payment}>
        <h1>Доставка и оплата</h1>
        <h2>Способы получения товара</h2>
        <div className={style.payment__card}>
          <div className={style.py__card}>
            <img src="/a.svg" alt="" />
            <h3>Самовывоз из магазина по адресу: г. Королёв, Лесная 12</h3>
          </div>
          <div className={style.py__card}>
            <img src="/a2.svg" alt="" />
            <h3>Доставка курьером по Москве и области </h3>
          </div>
          <div className={style.py__card}>
            <img src="/a1.svg" alt="" />
            <h3>Отправка Почтой России в любой регион</h3>
          </div>
        </div>
        <h4>Способы оплаты</h4>
        <div className={style.payment__cart}>
          <div>
            <p>
              Принимаем наличный и безналичный расчёт. Для современного мира укрепление и развитие внутренней структуры требует определения и уточнения соответствующих условий активизации. Как уже неоднократно упомянуто, некоторые особенности внутренней политики лишь добавляют фракционных разногласий и в равной степени предоставлены сами себе!
              <br /><br />
              Но базовые сценарии поведения пользователей преданы социально-демократической анафеме. Предварительные выводы неутешительны: семантический разбор внешних противодействий обеспечивает актуальность укрепления моральных ценностей.

            </p>
          </div>
          <div className={style.carts}>
            <div style={{cursor: "pointer"}}><img src="/Mastercard-logo.svg" alt="" /></div>
            <div style={{cursor: "pointer"}}><img src="/Mir-logo.SVG.svg" alt="" /></div>
            <div style={{cursor: "pointer"}}><img src="Visa_Inc._logo.svg" alt="" /></div>
          </div>
        </div> <br /><br />
        <div>Реквизиты организации</div>
        <div>
          <div className={style.about}>
            <div><div className={style.about__name} >Полное наименование организации</div><div className={style.about__desc}>Общество с ограниченной ответственностью «Сюрприз»</div></div><hr />
            <div><div className={style.about__name} >Юридический адрес</div><div className={style.about__desc}>123456, г. Королёв, ул. Советская, д. 25</div></div><hr />
            <div><div className={style.about__name} >Почтовый адрес	</div><div className={style.about__desc}>123456, г. Королёв, ул. Советская, д. 25</div></div><hr />
            <div><div className={style.about__name} >ИНН</div><div className={style.about__desc}>7712345678</div></div><hr />
            <div><div className={style.about__name} >КПП</div><div className={style.about__desc}>779101001</div></div><hr />
            <div><div className={style.about__name} >БИК</div><div className={style.about__desc}>044521234</div></div><hr />
            <div><div className={style.about__name} >Р/С	</div><div className={style.about__desc}>40702810123450101230 в Московский банк ПАО Сбербанк г. Москва</div></div><hr />
            <div><div className={style.about__name} >К/С	</div><div className={style.about__desc}>30101234500000000225</div></div><hr />
            <div><div className={style.about__name} >ОКПО</div><div className={style.about__desc}>45748578475</div></div><hr />
            <div><div className={style.about__name} >ОКАТО</div><div className={style.about__desc}>87654321000</div></div><hr />
            <div><div className={style.about__name} >ОКВЭД (основной)	</div><div className={style.about__desc}>18.15</div></div><hr />
            <div><div className={style.about__name} >ОГРН</div><div className={style.about__desc}>1047712345678</div></div><hr />
            <div><div className={style.about__name} >Генеральный директор	</div><div className={style.about__desc}>Петров Сергей Петрович</div></div><hr />

          </div>
        </div>
      </div>
    </div>
  )
}
