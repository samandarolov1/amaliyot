import React from 'react'
import style from "./discount.module.css"
export default function Discount() {
  return (
    <div className="container">
      <div className={style.aksiya__container}>
        <h1>Акции</h1>
        <div className={style.aksiya1}>
          <h4>Именниникам Скидка на все товары для праздника до 15%</h4>
        </div>
        <div className={style.aksiyas2}>
          <div className={style.aksiyas21}><h2><span>элитные шары</span> со скидкой 50%</h2></div>
          <div className={style.aksiyas22}><h3>элитные шары со скидкой 50%</h3></div>
        </div>
        <div className={style.aksiya3}>
          <div className={style.aksiya31}>Подпишитесь на email-рассылкуи <span>первыми узнавайте о новых акциях</span></div>
          <div className={style.aksiya32}>
            <div>
              <div className={style.emailing}>
                <input type="email" placeholder='Email' />
                <button>Подписаться</button>
              </div>
              <h6>Нажимая «Подписаться», вы принимаете условия политики обработки персональных данных</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
