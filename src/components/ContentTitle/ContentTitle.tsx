import React from 'react';
import classNames from 'classnames';
// ======= Styles ======
import cl from './ContentTitle.module.scss';

interface IContentTitle {
  shortTitle?: string,
  title: string,
}

const ContentTitke: React.FC<IContentTitle> = ({ shortTitle, title }) => {
  return (
    <h2 className={classNames(cl.title, cl.title_marg)}>
      <span
        className={classNames(cl['short-title'], cl['short-title_marg'])}
      >
        {shortTitle}
      </span>
        {title}
    </h2>
  );
};

export default ContentTitke;