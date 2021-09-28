import React, {useEffect, useState} from 'react'
import FavouriteItem from './FavouriteItem'

const axios = require('axios')

export default function FavouriteList({favCoinsLists}) {

    const [favCoinsList,
        setFavCoinsList] = useState([])

    useEffect(() => {
        function displayFavList(favCoinsLists) {
            if (favCoinsLists.length > 0) {
                favCoinsLists.forEach((obj, i) => {
                    axios
                        .get(`https://api.coingecko.com/api/v3/simple/price?ids=${obj}&vs_currencies=cad`)
                        .then(response => {
                            let keys = Object.keys(response.data)
                            setFavCoinsList(prev => [
                                ...prev, {
                                    [keys]: Object.values(response.data)[0].cad
                                }
                            ])
                        })
                })
            }
        }
        displayFavList(favCoinsLists)
    }, [favCoinsLists])

    return (
        <div className='fav-list'>
            <h2>Favourite Coins</h2>
            {favCoinsList.length > 0
                ? <FavouriteItem coins={favCoinsList}/>
                : <p>empty</p>}
        </div>
    )
}