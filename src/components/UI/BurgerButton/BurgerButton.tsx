import React from 'react';
import classNames from 'classnames';
// ======= Styles ======
import cl from './BurgerButton.module.scss';

interface IBurgerButton {
  setStateburger: Function,
  blockScroll: Function,
  stateBurger: boolean,
}

const BurgerButton: React.FC<IBurgerButton> = ({ stateBurger, setStateburger, blockScroll}) => {
  return (
    <button 
      className={
        stateBurger
        ?
        classNames(cl.btn, cl.btn_active)
        :
        cl.btn
      }
      onClick={() => {
        setStateburger(() => stateBurger ? false : true)
        blockScroll()
      } }
    >
      <div className={cl.line}></div>
    </button>
  );
};

export default BurgerButton;