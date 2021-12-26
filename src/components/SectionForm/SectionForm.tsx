import React from 'react';
// ======= Styles ======
import cl from './SectionForm.module.scss';
// ======= Components ======
import FormTraining from '../FormTraining/FormTraining';
import GlowingBall from '../UI/GlowingBall/GlowingBall';
import classNames from 'classnames';

const SectionForm = () => {
  return (
    <div className={cl.section}>

      <GlowingBall ballClassName={cl.circle} />
      <GlowingBall ballClassName={cl.circle_top} />

      <div className="container">

        <h2 className={cl.title}>
          Начни свое преображение
        </h2>


        <div className={cl.wrapper}>
          <FormTraining darkMode={true} />
        </div>

      </div>
    </div>
  );
};

export default SectionForm;