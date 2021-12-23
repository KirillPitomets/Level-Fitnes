import React from 'react';
import classNames from 'classnames';
// ======= Styles ======
import cl from './AboutClub.module.scss';
// ======= Imgs ======
import bigLogo from '../../assets/img/logo_gray.svg';
import girl from '../../assets/img/aboutClub/01.jpg';
import ContentTitle from '../ContentTitle/ContentTitle';
import ContentText from '../ContentText/ContentText';

const contentText: {text: string}[] = [
  {
    text: 'Все групповые программы Level Fitness построенны на профессионализме, неравнодушии и чувстве прекрасного.',
  },
  {
    text: 'Главная особенность — осознанные тренировки, основанные    на глубоких знаниях человеческой биомеханики. Наш подход обеспечит не только красоту тела, но и здоровье.',
  },
]

const AboutFitness = () => {

  return (
    <section className={cl.section_marg}>
      <div className="container container_big container_pos-r">
        <div className={cl.bg}>
          <img className={cl.bg__img} src={bigLogo} alt="Level Fitness" />
        </div>

        <div className="container">

          <div className={classNames(cl.wrapper, cl.wrapper_pad)}>

            <div className={cl.content}>

              <ContentTitle
                shortTitle='о клубе'
                title='Начни свое преображение с Level Fitness'
              />

              <ContentText content={contentText} />
            </div>

            <div className={cl.img}>
              <img className={cl.img__img} src={girl} alt="Girl exercising" />
            </div>

          </div>

        </div>


      </div>
    </section>
  );
};

export default AboutFitness;