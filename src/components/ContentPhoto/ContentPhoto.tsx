import classNames from 'classnames';
import React from 'react';
// ======= Styles ======
import cl from './ContentPhoto.module.scss';

interface IContentPhoto {
  img: any,
  alt: string,
  classNamePhoto?: string,
}

const ContentPhoto: React.FC<IContentPhoto> = ({img, alt, classNamePhoto}) => {
  return (
    <div className={classNames(cl.img, classNamePhoto)}>
      <img className={cl.img__img} src={img} alt={alt} />
    </div>
  );
};

export default ContentPhoto;