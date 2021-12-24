import classNames from 'classnames';
import React from 'react';
// ======= Styles ======
import cl from './BigCard.module.scss';

interface IBigCard {
  title: string,
  des: string,
  img: any,
  num: number,
}

const BigCard: React.FC<IBigCard> = ({ title, des, img, num }) => {

  return (
    <div className={cl.card}>

      <div className={cl.photo}>
        <img className={cl.photo__img}
          src={`${window.location.origin}/img/ourAdvantages/${img}`}
          alt="Man"
        />

        <div className={cl.num}>
          <div className={cl.num__wrapper}>
            <span className={cl.num__number}>
              {num}
            </span>
            <span className={cl['num__back-number']}>
              {num}
            </span>
          </div>
        </div>

      </div>

      <div className={cl.content_marg}>
        <div className={classNames(cl.title, cl.title_marg)}>
          {title}
        </div>
        <div className={cl.des}>
          {des}
        </div>

      </div>




    </div>
  );
};

export default BigCard;