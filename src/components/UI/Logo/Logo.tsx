import React from 'react';
// ======= Imgs ======
import logo from '../../../assets/img/logo.svg'
// ======= Styles ======
import cl from './Logo.module.scss'
// ======= Types ======
type ILogoProps = {
  path: string,
}

const Logo: React.FC<ILogoProps> = ({ path }) => {
  
  return (
    <a href={path} className={cl.logo}>
      <img className={cl.logo__img} src={logo} alt="Level fitness" />
    </a>
  );
};

export default Logo;