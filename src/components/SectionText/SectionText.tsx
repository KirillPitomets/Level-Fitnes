import React from 'react';
import classNames from 'classnames';
// ======= Styles ======
import cl from './SectionText.module.scss';

interface ISectionText {
  content: { text: string }[],
}

const SectionText: React.FC<ISectionText> = ({ content }) => {
  return (
    <>
      {
        content.map((p, indx) => (

          indx > 0
            ?
            <p key={p.text.length + indx} className={classNames(cl.text, cl.text_marg)}>
              {p.text}
            </p>
            :
            <p key={p.text.length + indx} className={cl.text}>
              {p.text}
            </p>

        ))
      }
    </>
  );
};

export default SectionText;