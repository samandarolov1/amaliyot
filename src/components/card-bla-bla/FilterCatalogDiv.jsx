import React from 'react'
import style from "./cards.module.css"
import { useDispatch } from 'react-redux'
import { doFilter} from '../../redux/Slices/FilterSlice'
export default function FilterCatalogDiv() {
    const dispatch = useDispatch()
    const inlineBtnSearch = { backgroundColor: "blue", color: "white", padding: "7px 8px", borderRadius: "5px", border: "none", fontSize: "16px" }

    function launchFind(params) {
        params.preventDefault()
        dispatch(doFilter())
    }
    return (
        <>
            <form className={style.category__filter__buttons}>

                <select onChange={(e) => dispatch(doFilter({ name: e.target.name, value: e.target.value }))} className={style.form__select} id="floatingSelect" aria-label="Floating label select example" name="category">
                    <option hidden>Category</option>
                    <option value="">All</option>
                    <option value="older"> for older</option>
                    <option value="young">for young</option>
                </select>


                <label>
                    <span>Цена</span><small>от</small>
                    <input onChange={(e) => dispatch(doFilter({ name: e.target.name, value: e.target.value }))} type="number" placeholder='min' name="min" id="" />
                </label>

                <label>
                    <small>до</small>
                    <input onChange={(e) => dispatch(doFilter({ name: e.target.name, value: e.target.value }))} type="number" placeholder='max' name="max" id="" />
                </label>

                <select onChange={(e) => dispatch(doFilter({ name: e.target.name, value: e.target.value }))} className={style.form__select} id="floatingSelect" aria-label="Floating label select example" name="color">
                    <option hidden>Color</option>
                    <option value="">none</option>
                    <option value="pink">pink</option>
                    <option value="purple">purple</option>
                    <option value="brown">brown</option>
                    <option value="green">green</option>
                    <option value="gray">gray</option>
                </select>
                <select onChange={(e) => dispatch(doFilter({ name: e.target.name, value: e.target.value }))} className={style.form__select} id="floatingSelect" name="brand">
                    <option hidden>Brend</option>
                    <option value="">none</option>
                    <option value="nice">nice</option>
                    <option value="adidas">adidas</option>
                    <option value="puma">puma</option>
                </select>
            </form>
        </>
    )
}
