import React from 'react';
import classNames from 'classnames';
// ======= Styles ======
import cl from './Home.module.scss'
import clSlide from './Splide.module.scss'
import '@splidejs/splide/dist/css/splide.min.css';
// ======= Data ======
import homeSlides from './homeSlides'
// ======= Splide / Slider ======
import { Splide, SplideSlide } from '@splidejs/react-splide';
// ======= Components ======
import SlideArrows from '../UI/SlideArrow/SlideArrows';
import HomeItem from '../HomeItem/HomeItem';
import lines from '../../assets/img/home/line.svg'

const Home = () => {

  const optionsSlide = {
    type: 'loop',
    pagination: false,

  }

  return (
    <section className={cl.home}>

      <div className={classNames(cl.home__line, cl.home__line_small)}>
        <img className={cl.line} src={lines} alt='' />
      </div>

      <div className={cl.home__line}>
        <img className={cl.line} src={lines} alt='' />
      </div>

      <div className={classNames(cl.home__line, cl.home__line_big)}>
        <img className={cl.line} src={lines} alt='' />
      </div>

      <div className={classNames(cl.home__line, cl.home__line_med)}>
        <img className={cl.line} src={lines} alt='' />
      </div>

      <div className="container container_big">

        <Splide options={optionsSlide}
          className={clSlide.slider}
          renderControls={() => (
            <div className={classNames("splide__arrows", clSlide.arrows)}>

              <div className="splide__arrow--prev" role="button">
                <SlideArrows />
              </div>

              <div className="splide__arrow--next" role="button">
                <SlideArrows />
              </div>
            </div>
          )}
        >

          {
            homeSlides.map(item => (
              <SplideSlide key={item.title}
                className={clSlide.slider__slide}
              >
                <HomeItem title={item.title}
                  text={item.text}
                  highlightedWord={item.highlightedWord}
                />
              </SplideSlide>
            ))
          }
        </Splide>



      </div>

    </section>
  );
};


export default Home;