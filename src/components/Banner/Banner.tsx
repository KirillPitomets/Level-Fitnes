import React from 'react';
// ======= Styles ======
import cl from './Banner.module.scss';
// ======= Components ======
import Button, { btnStyleVariant } from '../UI/Button/Button';
import classNames from 'classnames';

const Banner = () => {
  return (
    <section className={cl.banner}>
      <div className="container">

        <div className={cl.wrapper}>
          <h2 className={classNames(cl.title, cl.title_marg)}>
            Приходите на первое бесплатное занятие
          </h2>
          <p className={classNames(cl.p, cl.p_marg)}>
            Первое занятие является бесплатным исключительно <br /> для новых посетителей фитнес центра.
          </p>
          <p className={classNames(cl.p, cl.p_marg)}>
            Стоимость посещения групповых занятий, а так же стоимость абониментов в фитнес центр уточняйте у менеджера.
          </p>

          <Button btnStyle={btnStyleVariant.filled}
            btnClassNames={cl.btn}
          >
            зарегистрироваться
          </Button>


        </div>


      </div>
    </section>
  );
};

export default Banner;