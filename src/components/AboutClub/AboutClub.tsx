import React from 'react';
import classNames from 'classnames';
// ======= Styles ======
import cl from './AboutClub.module.scss';
// ======= Data ======
import contentText from './contentText';
import titleText from './titleText';
// ======= Imgs ======
import bigLogo from '../../assets/img/logo_gray.svg';
import girl from '../../assets/img/aboutClub/01.jpg';
// ======= Components ======
import SectionTextContent from '../SectionTextContent/SectionTextContent';
import SectionPhoto from '../SectionPhoto/SectionPhoto';

const AboutFitness = () => {

  return (
    <section className={cl.section_marg}>
      <div className="container container_big container_pos-r">
        <div className={cl.bg}>
          <img className={cl.bg__img} src={bigLogo} alt="Level Fitness" />
        </div>

        <div className="container">

          <div className={classNames(cl.wrapper, cl.wrapper_pad)}>

            <SectionTextContent contentText={contentText} titleText={titleText} />

            <SectionPhoto img={girl} alt='girl'/>

          </div>

        </div>


      </div>
    </section>
  );
};

export default AboutFitness;