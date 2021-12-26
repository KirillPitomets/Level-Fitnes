import classNames from 'classnames';
import React from 'react';
// ======= Styles ======
import cl from './GlowingBall.module.scss';


interface IGlowingBall {
  ballClassName?: string,
}

const GlowingBall: React.FC<IGlowingBall> = ({ballClassName}) => {
  return (
    <div className={classNames(cl.ball, ballClassName)}></div>
  );
};

export default GlowingBall;