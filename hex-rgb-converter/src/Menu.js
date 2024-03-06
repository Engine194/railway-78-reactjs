import React from 'react'
import { Link } from 'react-router-dom'
import { routesMap } from '.'

const Menu = () => {
  return (
    <div>
        <ul>
            {routesMap.map(({path, label},index) => {
                return <li key={index}>
                    <Link to={path}>{label}</Link>
                </li>
            }) }
        </ul>
    </div>
  )
}

export default Menu