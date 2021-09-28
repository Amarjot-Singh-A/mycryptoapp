import React from 'react'
import Favourite from './Favourite/Favourite'
import Trending from './Trending/Trending';

export default function Home() {
    return (
        <div>
            <Favourite />
            <Trending />
        </div>
    )
}
