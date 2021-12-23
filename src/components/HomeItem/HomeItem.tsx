import React from 'react';
import classNames from 'classnames'
// ======= Styles ======
import cl from './HomeItem.module.scss'
// ======= Imgs ======
import bg from '../../assets/img/home/01.jpg'

interface IHomeItem {
  title: string,
  text: string,
}

const HomeItem: React.FC<IHomeItem> = ({title, text}) => {
  return (
    <div className={classNames("container", cl.wrapper)} >

      <div className={cl['wrap-img']}>
        <img className={cl['wrap-img__img']} src={bg} alt="Woman" />
      </div>

      <div className={cl.content}>

        <h2 className={cl.content__title}>
          {title}
        </h2>
        <p className={cl.content__text}>
          {text}
        </p>

      </div>


    </div>
  );
};

export default HomeItem;