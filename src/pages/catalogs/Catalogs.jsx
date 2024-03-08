import React, { useEffect } from 'react'
import CatalogsTitle from '../../tools/CatalogsTitle'
import FilterCatalogDiv from '../../components/card-bla-bla/FilterCatalogDiv'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getAllCards } from '../../redux/Slices/FilterSlice'
import CardsComp from '../../components/card-bla-bla/CardsComp'

export default function Catalogs() {
  const dispatch = useDispatch()
  const { isloading, homeCard } = useSelector(state => state.main)
  const { allCards, filterCards, looking } = useSelector(state => state.filters)
  useEffect(() => {
    axios.get("http://localhost:3000/homeCard")
      .then((e) => dispatch(getAllCards(e.data)))
  }, [])
  return (
    <div className='container'>
      <CatalogsTitle />
      <FilterCatalogDiv />
      <br /><br /><br />

      {
        looking ?
          <CardsComp itemR={filterCards} />
          :
          <CardsComp itemR={homeCard} />
      }


    </div>
  )
}
