import React from 'react';
// ======= Styles ======
import cl from './SlideArrows.module.scss'
// ======= Components ======
import SvgIcon from '../SvgIcon/SvgIcon';

const SlideArrows = () => {
  return (
    <div className={cl['slide-arrow']} >
      <SvgIcon classSvg={cl['slide-arrow_svg']} svgName='arrow' viewBox='0 0 8 14'/>
    </div>
  );
};

export default SlideArrows;