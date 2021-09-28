import React from 'react'
import FavouriteList from './FavouriteList'
import './Favourite.css'


export default function Favourite() {

    const favCoins = JSON.parse(localStorage.getItem('favouriteCoins'))? JSON.parse(localStorage.getItem('favouriteCoins')):[]

    return (
        <div>
            <FavouriteList favCoinsLists = {favCoins}/>
        </div>
    )
}
