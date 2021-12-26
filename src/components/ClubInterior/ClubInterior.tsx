import React from 'react';
// ======= Data ======
import photos from './iteriorPhoto';
// ======= Styles ======
import cl from './ClubInterior.module.scss';
// ======= Components ======
import SectionTitle, { ThemesVariant } from '../SectionTitle/SectionTitle';
import Photo from '../Photo/Photo';

const ClubInterior = () => {
  return (
    <section className={cl.section}>
      <div className="container">
        <SectionTitle
          title='Интерьер в фитнес-центре'
          shortTitle='приглашаем в гости'
          theme={ThemesVariant.lightTheme}
        />


        <div className={cl.wrapper}>

          {
            photos.map(photo => (
              <a className={cl.link} href={photo.href}>
                <Photo photoClassName={cl.photo} img={photo.img} alt={photo.alt} />
              </a>
            ))
          }

        </div>

      </div>
    </section>
  );
};

export default ClubInterior;