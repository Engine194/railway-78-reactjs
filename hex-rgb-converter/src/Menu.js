import React from 'react'
import { routeMaps } from '.'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <ul>
            {routeMaps.map(({path, label}, index) => {
                return <li key={index}>
                    <Link to = {path}>{label}</Link>
                </li>
            })}
        </ul>
    </div>
  )
}

export default Menu