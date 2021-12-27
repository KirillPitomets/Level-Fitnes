import React from 'react';
import classNames from 'classnames'
// ======= Styles ======
import cl from './HomeItem.module.scss'
// ======= Imgs ======
import bg from '../../assets/img/home/01.jpg'

interface IHomeItem {
  title: string,
  text: string,
  highlightedWord: string,
}

const HomeItem: React.FC<IHomeItem> = ({ title, text, highlightedWord }) => {

  let firstPartOfTitle = '';
  let highlighedWord = '';
  let lastPartOfTitle = '';

  const findHighlightedWord = (text: string, highlightedWord: string,) => {

    const indxHighlightedWord = text.indexOf(highlightedWord);

    const lastIndxHighlightedWord = indxHighlightedWord + (highlightedWord.length);

    highlighedWord = text.substring(indxHighlightedWord, lastIndxHighlightedWord);

    firstPartOfTitle = text.substring(0, indxHighlightedWord)
    lastPartOfTitle = text.substring(lastIndxHighlightedWord)

  }

  findHighlightedWord(title, highlightedWord)


  return (
    <div className={classNames("container", cl.wrapper)} >

      <div className={cl['wrap-img']}>
        <img className={cl['wrap-img__img']} src={bg} alt="Woman" />
      </div>

      <div className={cl.content}>

        <h2 className={cl.content__title}>
          {firstPartOfTitle}
          <span className={cl.content__title_span}>
            {highlighedWord}
          </span>
          {lastPartOfTitle}
        </h2>
        <p className={cl.content__text}>
          {text}
        </p>

      </div>


    </div>
  );
};

export default HomeItem;