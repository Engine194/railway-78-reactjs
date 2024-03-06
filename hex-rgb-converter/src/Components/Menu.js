import React from 'react'
import { Link } from 'react-router-dom'
import { routesMap } from '..'

const Menu = () => {
  const mainRoutes = routesMap.filter(({isMain}) => isMain);

  return (
    <div>
        <ul>
            {mainRoutes.map(({path, label},index) => {
                return <li key={index}>
                    <Link to={path}>{label}</Link>
                </li>
            }) }
        </ul>
    </div>
  )
}

export default Menu