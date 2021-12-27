import React from 'react';
import classNames from 'classnames';
// ======= Sometimes img ======
import Button, { btnStyleVariant } from '../UI/Button/Button';
// ======= Styles ======
import cl from './Card.module.scss';

interface ICard {
  img: string,
  alt: string,
  setModal: Function,
}

const Card: React.FC<ICard> = ({ img, alt, setModal }) => {

  return (
    <div className={classNames(cl.card, cl.card_marg)}>

      <div className={cl.img}>
        <img className={cl.img__img} src={`${window.location.origin}/img/ourPrograms/${img}`} alt={alt} />
      </div>

      <h3 className={classNames(cl.title, cl.title_marg)}>
        HIT-тренинг
      </h3>

      <div className={cl.des}>
        Тренировка на мышцы ног и ягодиц,
        с использованием резинок и отягощения
        + 30 минут растяжка
      </div>

      <Button btnStyle={btnStyleVariant.outLine}
        btnClassNames={classNames(cl.btn, cl.btn_marg)}
        onClick={() => setModal(true)}
      >
        Записаться
      </Button>

    </div>
  );
};

export default Card;