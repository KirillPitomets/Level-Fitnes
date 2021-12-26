import classNames from 'classnames';
import React from 'react';
// ======= Styles ======
import cl from './SectionPhoto.module.scss';

export enum CirclePosOptions {
  top = 'top'
}

interface IContentPhoto {
  img: any,
  alt: string,
  classNamePhoto?: string,
  circlePos?: CirclePosOptions,
}

const ContentPhoto: React.FC<IContentPhoto> = ({ img, alt, classNamePhoto, circlePos }) => {
  return (
    <div className={
      circlePos === CirclePosOptions.top
        ?
        classNames(cl.img, cl.img_top, classNamePhoto)
        :
        classNames(cl.img, classNamePhoto)
    }>
      <img className={cl.img__img} src={img} alt={alt} />
    </div>
  );
};

export default ContentPhoto;