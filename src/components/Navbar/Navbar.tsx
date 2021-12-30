import React from 'react';
import classNames from 'classnames';
import { Link, animateScroll as scroll } from "react-scroll";
// ======= Styles ======
import cl from './Navbar.module.scss'
// ======= Data ======
import { navList } from './navGroup'

const Navbar = () => {

  const removingHashTag = (path: string) => {

    const a = path.split('#')

    return a.join('');
  }

  return (
    <nav className={classNames(cl.nav, cl.nav_marg)}>
      <ul className={cl.nav__list}>
        {
          navList.map(item => (
            <li key={item.id} className={cl.nav__item}>
              <Link
                to={ removingHashTag(item.path) }
                smooth={true}
                offset={-150}
                className={cl.nav__link}
              >
                {item.text}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Navbar;