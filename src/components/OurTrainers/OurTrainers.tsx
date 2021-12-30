import React from 'react';
// ======= Data ======
import contentText from './contentText';
import titleText from './titleText';
import cardsData from './cardData';
// ======= Imgs ======
import girl from '../../assets/img/ourPrograms/01.jpg';
// ======= Styles ======
import cl from './OurTrainers.module.scss';
// ======= Components ======
import SectionTextContent from '../SectionTextContent/SectionTextContent';
import SectionPhoto, { CirclePosOptions } from '../SectionPhoto/SectionPhoto';
import PhotoCard from '../PhotoCard/PhotoCard';
import classNames from 'classnames';

const OurTrainers = () => {
  return (
    <section className={classNames(cl.section, cl.section_marg)}
      id="trainers"
    >
      <div className="container">

        <div className={cl.wrapper}>

          <div className={cl.bg}>
            <p className={cl.bg__text}>
              тренерский <br />
              состав
            </p>
          </div>

          <SectionTextContent contentText={contentText} titleText={titleText} />
          <SectionPhoto circlePos={CirclePosOptions.top}
            classNamePhoto={cl.photo}
            img={girl}
            alt='girl'
          />
        </div>
        <div className={classNames(cl.inner, cl.inner_marg)}>
          {
            cardsData.map(card => (
              <PhotoCard
                key={card.id}
                title={card.name}
                des={card.des}
                img={card.img}
                alt={card.alt}
                linkToTrainer={card.link} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default OurTrainers;