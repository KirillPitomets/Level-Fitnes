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
import SectionPhoto from '../SectionPhoto/SectionPhoto';
import Card from '../Card/Card';
import Button, { btnStyleVariant } from '../UI/Button/Button';

interface IOurPrograms {
  setModal: any,
}

const OurPrograms: React.FC<IOurPrograms> = ({ setModal }) => {

  return (
    <div className={cl.section}>

      <img className={cl.line} src={line} alt="" />

      <div className="container">

        <div className={cl.wrapper}>

          <div className={cl.bg}>
            <p className={cl.bg__text}>
              Наши программы
            </p>
          </div>

          <SectionTextContent contentText={contentText} titleText={titleText} />
          <SectionPhoto classNamePhoto={cl.photo} img={girl} alt='girl' />
        </div>

        <div className={classNames(cl.inner, cl.inner_marg)}>
          {
            cards.map(card => (
              <Card key={card.id} setModal={setModal} img={card.img} alt={card.alt} />
            ))
          }
        </div>

        <Button btnStyle={btnStyleVariant.filled}
          btnClassNames={classNames(cl.btn, cl.btn_marg)}
        >
          Посмотреть все программы
        </Button>
      </div>
    </div>
  );
};

export default OurPrograms;