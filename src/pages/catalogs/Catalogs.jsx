import React from 'react'
import CatalogsTitle from '../../tools/CatalogsTitle'
import FilterCatalogDiv from '../../components/card-bla-bla/FilterCatalogDiv'
import CardsComp from '../../components/card-bla-bla/CardsComp'
import { useSelector } from 'react-redux'

export default function Catalogs() {
  const { isloading,  homeCard, comforts } = useSelector(state => state.main)
  return (
    <div className='container'>
      <CatalogsTitle />
      <FilterCatalogDiv />
      <br /><br /><br />
        <CardsComp itemR={homeCard} toFilter={"bestseller"} />
      
    </div>
  )
}
