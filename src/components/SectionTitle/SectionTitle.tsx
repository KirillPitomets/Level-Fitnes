import React from 'react';
import classNames from 'classnames';
// ======= Styles ======
import cl from './SectionTitle.module.scss';

export enum ThemesVariant {
  darkTheme = 'dark',
  lightTheme = 'light',
}

interface ISectionTitle {
  shortTitle?: string,
  title: string,
  theme: ThemesVariant,
}

const SectionTitle: React.FC<ISectionTitle> = ({ shortTitle, title, theme }) => {
  return (
    <h2 className={
      theme === ThemesVariant.darkTheme
        ?
        classNames(cl.title, cl.title_marg)
        :
        classNames(cl.title, cl.title_light, cl.title_marg)
    }>
      <span
        className={classNames(cl['short-title'], cl['short-title_marg'])}
      >
        {shortTitle}
      </span>
      <span className={theme === ThemesVariant.lightTheme ? cl.title__title : ' '}>
        {title}
      </span>

      {
        theme === ThemesVariant.lightTheme
          ?
            <div className={cl['bot-line']}></div>
          :
            <></>
      }

    </h2>
  );
};

export default SectionTitle;
