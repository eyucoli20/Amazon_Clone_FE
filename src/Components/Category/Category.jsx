import React from 'react'
import {categoryInfos} from './catagoryFullinfos'
import CategoryCard from './CategoryCard'
import './Category.css'

function Category() {
    return (
        <section className='category__container'>
            {
                categoryInfos.map((infos)=> {
                    return <CategoryCard data = {infos} />
                })
            }
        </section>
    )
}

export default Category
