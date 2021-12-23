import React from 'react';
import classNames from 'classnames';
// ======= Styles ======
import cl from './Icon.module.scss'
// ======= Svg sprite ======
import Icons from './icons.svg'

interface iSvgIcon {
  svgName: string,
  classSvg?: string,
  viewBox: string,
}

const SvgIcon : React.FC<iSvgIcon> = ({ svgName, classSvg, ...props }) => {
  return (
    <svg className={ classNames(cl.icon, classSvg)} {...props}>
      <use xlinkHref={`${Icons}#icon-${svgName}`} />
    </svg>
  );
};

export default SvgIcon;