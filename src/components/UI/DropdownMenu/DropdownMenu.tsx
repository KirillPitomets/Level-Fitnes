import React from 'react';
import classNames from 'classnames';
// ======= Styles ======
import cl from './DropdownMenu.module.scss';

/* ------------------------
-------- DropdownMenu --------
------------------------ */

export const DropdownMenu: React.FC = ({ children }) => {

  return (
    <div className={cl.dropdown}>

      {children}

    </div>
  );

};

/* ------------------------
-------- Droplist --------
------------------------ */

interface IDropdownlist {
  open: boolean,
}

export const DropdownList: React.FC<IDropdownlist> = ({ children, open }) => {

  return (
    <ul className={ open ? cl.dropdown__list : classNames(cl.dropdown__list, cl.dropdown__list_hide) }>
      {children}
    </ul>
  )
}

/* ------------------------
-------- DropdownActiveItem --------
------------------------ */

interface IDropdownActiveItem {
  onClick: () => void,
}

export const DropdownActiveItem: React.FC<IDropdownActiveItem> = ({ children, onClick, ...props }) => {

  return (
    <div className={cl['dropdown__active-item']}
      {...props}
      onClick={onClick}
    >
      {children}

      <div className={cl.dropdown__arrow}></div>
    </div>
  );

};

/* ------------------------
-------- DropItem --------
------------------------ */

interface IDropdownItem {
  value: string,
  onClick: () => void,
}

export const DropdownItem: React.FC<IDropdownItem> = ({ children, value, onClick, ...props }) => {


  return (
    <li className={cl.dropdown__item} value={value} onClick={onClick} {...props}>
      {children}
    </li>
  )
}

