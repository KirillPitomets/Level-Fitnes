import classNames from 'classnames';
import React from 'react';
// ======= Styles ======
import cl from './Button.module.scss'

export enum btnStyleVariant {
  outLine = 'outline',
  filled = 'filled',
}

interface IButtonProps {
  children: string,
  onClick?: (e: any) => void,
  btnStyle: btnStyleVariant,
  width?: string,
  btnClassNames?: any,

}


const Button: React.FC<IButtonProps> = ({ children, onClick, width, btnStyle, btnClassNames, ...props }) => {


  return (
    <button
      className={
        btnStyle === btnStyleVariant.filled
        ?
        classNames(cl.btn, btnClassNames)
        :
        classNames(cl.btn, cl.btn_outline, btnClassNames)
      }
      onClick={onClick}
      style={{width: width,}}
    >
      <span className={cl.btn__text}>
        {children}
      </span>
    </button>
  );
};

export default Button;