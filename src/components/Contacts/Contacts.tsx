import React from 'react';
// ======= Styles ======
import cl from './Contacts.module.scss';
// ======= Data ======
import contactsData from './contactsData';
import map from '../../assets/img/map/01.jpg'
// ======= Components ======
import SvgIcon from '../UI/SvgIcon/SvgIcon';


const Contacts = () => {
  return (
    <section className={cl.section} id="contacts">
      <div className="container">

        <div className={cl.wrapper}>

          <div className={cl.contacts}>


            {
              contactsData.map(contact => (
                <div key={contact.id} className={cl.contact}>

                  {/* set svg icon */}
                  <SvgIcon classSvg={cl.svg}
                    svgName={
                      contact.id === 'phoneNumber'
                        ?
                        'phone'
                        :
                        contact.id === 'date'
                          ?
                          'date'
                          :
                          contact.id === 'address'
                            ?
                            'mark'
                            :
                            ''

                    }
                    viewBox={
                      contact.id === 'phoneNumber'
                        ?
                        '0 0 16 17'
                        :
                        contact.id === 'date'
                          ?
                          '0 0 24 24'
                          :
                          contact.id === 'address'
                            ?
                            '0 0 24 24'
                            :
                            ''
                    }
                  />

                  {/* Checking for name */}
                  
                  {contact.name
                    ?
                    <p className={cl.contact__name}>
                      {contact.name} :
                    </p>
                    :
                    null
                  }

                  {/* Checking Link or Paragraph */}

                  {
                    contact.href
                      ?
                      <a className={cl.contact__link} href={
                        contact.id === 'phoneNumber'
                          ?
                          `tel:${contact.href}`
                          :
                          contact.href
                      }>
                        {contact.data}
                      </a>
                      :
                      <p className={cl.contact__text}>
                        {
                          Array.isArray(contact.data)
                            ?
                            // Prints lines if any
                            contact.data.map((line, indx) => (
                              contact.id === 'date'
                                ?
                                <time key={contact.id + indx}>
                                  {line}
                                </time>
                                :
                                <span key={contact.id + indx} >
                                  {line}
                                </span>
                            ))
                            :
                            contact.data
                        }
                      </p>
                  }

                </div>
              ))
            }

            <p className={cl.des}>
              Level Fitness ?????? ?????????????????????? ???????????? ?????????? ?? ?????????? ???????????? ???????????? ????????????????. ?????????????????????????? ???????????????????????? ?????????????????????? ?? ???????????? ?????? ?????????????????? ????????????????????.
            </p>

          </div>

          <div className={cl.map}>
            <img className={cl.map__img} src={map} alt='Map ' />

            <div className={cl.map__content}>
              <h4 className={cl.map__title}>
                Level Fitness
              </h4>
              <p className={cl.map__text}>
                ????.?????????????? ????????????, 84
                ??????????????,
                ???????????????????? ??????., ????????????
                346880

              </p>
              <a className={cl.map__link} href="https://www.google.com.ua/maps/@50.444801,30.5177852,12z?hl=ru" target="_blank" rel='noreferrer'>
                ???????????????????? ???? google maps
              </a>
            </div>
          </div>


        </div>


      </div>
    </section>
  );
};

export default Contacts;