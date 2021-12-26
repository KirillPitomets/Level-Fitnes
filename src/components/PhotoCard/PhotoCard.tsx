import React from 'react';
import classNames from 'classnames';
// ======= Styles ======
import cl from './PhotoCard.module.scss';

interface IPhotoCard {
  img: string,
  alt?: string,
  title: string,
  des: string,
  linkToTrainer: string,
}

const Card: React.FC<IPhotoCard> = ({ img, alt, title, des, linkToTrainer }) => {
  return (
    <a href={linkToTrainer} target='_blank' rel='noreferrer'
      className={classNames(cl.card, cl.card_marg)}>

      <div className={cl.img}>
        <img className={cl.img__img} src={`${window.location.origin}/img/trainers/${img}`} alt={alt} />
      </div>

      <h3 className={classNames(cl.title, cl.title_marg)}>
        {title}
      </h3>

      <div className={cl.des}>
        {des}
      </div>

    </a>
  );
};

export default Card;