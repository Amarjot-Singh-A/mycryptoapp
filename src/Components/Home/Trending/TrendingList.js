import React from 'react'
import TrendingItem from './TrendingItem'

export default function TrendingList({trendings}) {

    const iterateTrendings = (trendings) => {
        // choose a better key to iterate
        return trendings.length > 0 && trendings.map((obj, i) => {
            return <TrendingItem key={i} obj={obj}/>
        })
    }

    return (
        <div className='trending_list'>
            {iterateTrendings(trendings)}
        </div>
    )
}
