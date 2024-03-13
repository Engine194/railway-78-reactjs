import React from 'react';
import { routeMap } from '..';
import { Link } from 'react-router-dom';

const Menu = () => {
    const routeMain = routeMap.filter((isMain) => isMain)
    return (
        <div>
            <ul>

                {routeMain.map(({ path, label }, index) => {
                    return <li key={index}>
                        <Link to={path}>{label}</Link>
                    </li>
                })}

            </ul>
        </div>
    );
};

export default Menu;