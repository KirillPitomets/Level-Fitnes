import React from 'react';
import classNames from 'classnames';
// ======= Styles ======
import cl from './OurAdvantages.module.scss';
// ======= Data ======
import titleText from './titleText';
import cardText from './cardContent'
// ======= Components ======
import SectionTitle, { ThemesVariant } from '../SectionTitle/SectionTitle';
import BigCard from '../BigCard/BigCard';



const OurAdvantages = () => {
  return (
    <section className={cl.section}>
      <div className="container">

        <SectionTitle
          shortTitle={titleText.shortTitle}
          title={titleText.title}
          theme={ThemesVariant.lightTheme}
        />

        <div className={classNames(cl.wrapper, cl.wrapper_marg)}>

          {
            cardText.map((card, indx) => (
              <BigCard
                key={card.title}
                title={card.title}
                des={card.des}
                img={card.img}
                num={indx + 1}
              />
            ))
          }

        </div>

      </div>
    </section>
  );
};

export default OurAdvantages;