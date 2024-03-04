import React from 'react'
import { routeMaps } from '.'
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <ul>
            {routeMaps.map(({path, lable}, index )=>{
                return <li key = {index}>
                        <Link to={path} > {lable} </Link>
                </li>
            })}
        </ul>
    </div>
  )
}

export default Menu