import React from 'react'
import {Link} from 'react-router-dom'

export default function FavouriteItem({coins}) {

    
    return (
        <div className='fav-items'>
            {coins && coins.map((obj, i) => {
                return <Link to = {{pathname : `/coin/${Object.keys(obj).join('')}`}} key={i}>
                <div className='favourite_item'  >
                    <p>{Object.keys(obj)}</p>
                    <p>{Object.values(obj)}</p>
                </div>
                </Link>
            })}

        </div>
    )
}
