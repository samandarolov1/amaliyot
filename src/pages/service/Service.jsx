import React from 'react'
import style from "./service.module.css"
import ContactComp from '../../components/aboutGift/ContactComp'

export default function Service() {

  return (
    <div className='container'>
      <br /><br /><br />
      <div className={style.oficcess__container}>
        <h1>Услуги и сервис в магазине</h1>
        <div className={style.oficces}>
          <div className={style.oficces__left}>
            <h2>Надуем воздушные шары к празднику</h2>
            <p>
              Высокое качество позиционных исследований обеспечивает актуальность новых принципов формирования материально-технической и кадровой базы. А также многие известные личности заблокированы в рамках своих собственных рациональных ограничений. В рамках спецификации современных стандартов, предприниматели в сети интернет, превозмогая сложившуюся непростую экономическую ситуацию, ограничены исключительно образом мышления. Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали.
              <br /> <br /><br />
              Каждый из нас понимает очевидную вещь: постоянное информационно-пропагандистское обеспечение нашей деятельности предоставляет широкие возможности для форм воздействия. Высокое качество позиционных исследований, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для модели развития.
            </p>
          </div>
          <div className={style.oficces__right}><img src="./Vector.png" alt="" /></div>
        </div>
        <div className={style.oficces__card}>
          <div className={style.of__card}>
            <img src="/Frame 112.svg" alt="" />
            <h3>Любое количество</h3>
          </div>
          <div className={style.of__card}>
            <img src="/Frame 112 (1).svg" alt="" />
            <h3>Доставим в нужное время</h3>
          </div>
          <div className={style.of__card}>
            <img src="/Frame 112 (2).svg" alt="" />
            <h3>Гарантия на полёт 3 дня</h3>
          </div>
          <div className={style.of__card}>
            <img src="/Frame 112 (3).svg" alt="" />
            <h3>Украсим пространство</h3>
          </div>
        </div>
        <div className={style.zayavka}>
          <h1><span>Оставьте заявку на услугу.</span> Перезвоним, чтобы обсудить детали</h1>
          <div className={style.buttons}>
            <input type="text" placeholder='Имя' />
            <input type="text" placeholder='Номер телефона' />
            <button>Отправить</button>
          </div> <br />
          <div><small>Нажимая «Отправить», вы принимаете условия политики обработки персональных данных</small></div>
        </div>
        <br /><br /><br /><br />
        <div className={style.oficces}>
          <div className={style.oficces__left}>
            <h2>Сдадим баллоны для надувания в аренду</h2>
            <p>
              Равным образом, сложившаяся структура организации создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса стандартных подходов. И нет сомнений, что действия представителей оппозиции, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме.
              <br /><br /><br />
              Предварительные выводы неутешительны: глубокий уровень погружения играет определяющее значение для поэтапного и последовательного развития общества. Повседневная практика показывает, что синтетическое тестирование требует от нас анализа существующих финансовых и административных условий.
            </p>
          </div>
          <div className={style.oficces__right}><img src="/Vector (1).png" alt="" /></div>
        </div>
        <div className={style.oficces__card}>
          <div className={style.of__card}>
            <img src="/1.svg" alt="" />
            <h3>На 100 шаров</h3>
          </div>
          <div className={style.of__card}>
            <img src="/2.svg" alt="" />
            <h3>На 50 шаров </h3>
          </div>
          <div className={style.of__card}>
            <img src="/3.svg" alt="" />
            <h3>На 25 шаров</h3>
          </div>
          <div className={style.of__card}>
            <img src="/4.svg" alt="" />
            <h3>На 15 шаров</h3>
          </div>
        </div>
        <div className={style.zayavka}>
          <h1><span>Оставьте заявку на услугу.</span> Перезвоним, чтобы обсудить детали</h1>
          <div className={style.buttons}>
            <input type="text" placeholder='Имя' />
            <input type="text" placeholder='Номер телефона' />
            <button>Отправить</button>
          </div> <br />
          <div><small>Нажимая «Отправить», вы принимаете условия политики обработки персональных данных</small></div>
        </div>
        <br /><br /><br />
        <ContactComp />
        <br /><br />
      </div>
    </div>
  )


}
