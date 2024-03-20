import React from 'react'
import ToGift from '../../components/aboutGift/ToGift'
import "./about.css"
export default function About() {
  return (
    <div className='container'>
      <div className='aboutus1'>
        <div className="aboutus__header">
          <div className="aboutus__cover">
            <div className='descus'>
              <div className="aboutus__desc">
                <h6> Привет! Мы <span className='sasha'>саша</span> и <span className='galya'>галя</span>.</h6>
                10 лет мы помогаем делать праздники красивыми
              </div>
              <div className="aboutus__desc2">
                В частности, курс на социально-ориентированный национальный проект предопределяет высокую востребованность приоритизации разума над эмоциями. А также стремящиеся вытеснить традиционное производство, нанотехнологии в равной степени предоставлены сами себе.
              </div>
            </div>
            <div className="aboutsusimg">
              <img src="sasha-galya.png" alt="" />
            </div>
          </div>

        </div>
      </div>
      <ToGift />
    </div>
  )
}
