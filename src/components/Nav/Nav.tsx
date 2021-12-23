import React from 'react';
import classNames from 'classnames';
// ======= Styles ======
import cl from './Nav.module.scss'
// ======= Data ======
import {navList} from './navGroup'


const Nav = () => {

  return (
    <nav className={classNames(cl.nav, cl.nav_marg)}>
      <ul className={cl.nav__list}>
        {
          navList.map(item => (
            <li key={item.id} className={cl.nav__item}>
              <a href={item.path} className={cl.nav__link}>
                {item.text}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Nav;