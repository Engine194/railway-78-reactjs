import React from "react";
import { Link, Route } from "react-router-dom";
import { routerMaps } from "..";
const Menu = () => {
    return (
        <div>
            <ul>
                {routerMaps.filter(((isMain) => isMain)).map(({ path, label }, index) => {
                    return <li key={index}>
                        <Link to={path} > {label}</Link>

                    </li>
                })}
            </ul>
        </div>
    )
}

export default Menu;
