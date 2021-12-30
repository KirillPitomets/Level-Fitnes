import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
// ======= Styles ======
import cl from './Header.module.scss';
// ======= Components ======
import SvgIcon from '../UI/SvgIcon/SvgIcon';
import Logo from '../UI/Logo/Logo';
import Button, { btnStyleVariant } from '../UI/Button/Button';
import Navbar from '../Navbar/Navbar';
import BurgerButton from '../UI/BurgerButton/BurgerButton';

interface IHeader {
  setTrainingModal?: any,
}

const Header: React.FC<IHeader> = ({ setTrainingModal }) => {

  const [activeHeader, setActiveHeader] = useState(false);
  const [headerBurger, setHeaderBurger] = useState(false);

  const changeHeader = () => {
    if (window.scrollY > 120) {
      setActiveHeader(true)
    } else {
      setActiveHeader(false)
    }
  }

  const blockedScroll = () => {

    if (!headerBurger) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }

  }


  useEffect(() => {
    window.addEventListener('scroll', changeHeader)
    changeHeader()
    return () => {
      window.removeEventListener('scroll', changeHeader)
    }
  }, [activeHeader])

  return (
    <header className={!activeHeader ? cl.header : classNames(cl.header, cl.header_active)}>
      <div className="container">
        <div className={cl.header__wrapper}>
          <Logo
            path='./'
          />

          <BurgerButton
            stateBurger={headerBurger}
            setStateburger={setHeaderBurger}
            blockScroll={blockedScroll}
          />


          <div className={
            headerBurger
              ?
              classNames(cl.header__inner, cl.header__inner_active)
              :
              cl.header__inner
          }>
            <div          
              className={cl.header__nav}
            >
              <div className={classNames(cl.header__item, cl['header__item_flex-start'])}>
                <a className={cl.link} href="https://www.google.com.ua/maps/@50.4215957,30.5526628,12.75z" target="_blank" rel="noreferrer">
                  <SvgIcon svgName='mark' viewBox="0 0 24 24" classSvg={cl.svg_mark} />
                  <span className={cl.link__text}>
                    г. Батайск, М. Горького, д. 84
                  </span>
                </a>

                <a className={classNames(cl['box-link'], cl['box-link_marg'])}
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SvgIcon svgName='instagram' viewBox="0 0 24 24" classSvg={cl.svg_inst} />
                  <span className={cl['box-link__text']}>
                    Мы в Instagram
                  </span>
                </a>
              </div>
              {/* // =================== */}
              <div className={cl.header__item}>

                <div className={cl.header__row}>
                  <a className={classNames(cl['phone-link'], cl['phone-link_marg'])} href="tel:+7 863 272-72-77">
                    <SvgIcon svgName='phone' classSvg={cl.svg_phone} viewBox='0 0 16 17' />
                    <span className={cl['phone-link__num']}>
                      +7 863 272-72-77
                    </span>
                  </a>

                  <Button
                    btnClassNames={cl.btn}
                    btnStyle={btnStyleVariant.filled}
                    onClick={() => setTrainingModal(true)}
                  >
                    На тренировку
                  </Button>

                </div>

                <div className={cl.header__row}>
                  <Navbar />
                </div>

              </div>
            </div>
          </div>

        </div>


      </div>
    </header>
  );
};

export default Header;