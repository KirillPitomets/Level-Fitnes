import React from 'react';
import classNames from 'classnames';
// ======= Styles ======
import cl from './ContentText.module.scss';

interface IContentText {
  content: { text: string }[],
}

const ContentText: React.FC<IContentText> = ({ content }) => {
  return (
    <>
      {
        content.map((p, indx) => (

          indx > 0
            ?
            <p className={classNames(cl.text, cl.text_marg)}>
              {p.text}
            </p>
            :
            <p className={cl.text}>
              {p.text}
            </p>

        ))
      }
    </>
  );
};

export default ContentText;