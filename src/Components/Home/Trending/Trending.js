import './trending.css'
import React, {useState, useEffect} from 'react'
import TrendingList from './TrendingList';

const axios = require('axios');

export default function Trending() {
    const [trending,
        setTrending] = useState('')
    const url = 'https://api.coingecko.com/api/v3/search/trending'

    useEffect(() => {
        getTrendingData()
    }, [])

    const getTrendingData = () => {
        axios
            .get(url)
            .then(response => {
                let allData = response.data.coins
                setTrending(allData)
            })
            .catch((error) => console.error(`Error -> ${error}`))
    }

    return (
        <div className='trending'>
            <h2>Top Trending Coins</h2>
            <TrendingList trendings={trending}/>
        </div>
    )
}
