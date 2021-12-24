import React from 'react';
import classNames from 'classnames';
// ======= Imgs ======
import girl from '../../assets/img/ourPrograms/01.jpg';
import line from '../../assets/img/ourPrograms/line.svg';
// ======= Styles ======
import cl from './OurPrograms.module.scss';
// ======= Data ======
import contentText from './contentText';
import titleText from './titleText';
import cards from './Cards';
// ======= Components ======
import SectionTextContent from '../SectionTextContent/SectionTextContent';
import ContentPhoto from '../ContentPhoto/ContentPhoto';
import Card from '../Card/Card';

const OurPrograms = () => {

  return (
    <div className={cl.section}>

      <img className={cl.line} src={line} alt="" />

      <div className="container">

        <div className={cl.wrapper}>

          <div className={cl.bg}>
            Наши программы
          </div>

          <SectionTextContent contentText={contentText} titleText={titleText} />
          <ContentPhoto classNamePhoto={cl.photo} img={girl} alt='girl' />
        </div>

        <div className={classNames(cl.inner, cl.inner_marg)}>
          {
            cards.map(card => (
              <Card img={card.img} alt={card.alt} />
            ))
          }
        </div>

      </div>
    </div>
  );
};

export default OurPrograms;