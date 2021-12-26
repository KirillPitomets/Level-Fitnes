import classNames from 'classnames';
import React from 'react';
// ======= Styles ======
import cl from './Photo.module.scss';

interface IIPhoto {
  img: string,
  alt: string,
  photoClassName?: string,
}

const Photo: React.FC<IIPhoto> = ({ img, alt, photoClassName }) => {
  return (
    <div className={classNames(cl.img, photoClassName)}>
      <img className={cl.img__img}
        src={`${window.location.origin}/img/clubInterior/${img}`}
        alt={alt}
      />
    </div>
  );
};

export default Photo;