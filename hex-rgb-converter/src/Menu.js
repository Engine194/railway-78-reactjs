import React from 'react'
import { routerMaps } from '.'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <div>
        <ul>
            {routerMaps.map(({path, lable},index)=>{
                return <li key={index}>
                    <Link to={path}>{lable} </Link>
                </li>
            })}
        </ul>
    </div>
  )
}
