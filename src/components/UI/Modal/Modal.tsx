import classNames from 'classnames';
import React from 'react';
// ======= Imgs ======

// ======= Styles ======
import cl from './Modal.module.scss'
interface IModal {
  children: object, // Component
  bg: any,
  setModal: Function,
  modal: any,
}

const Modal: React.FC<IModal> = ({ children, bg, modal, setModal }) => {

  return (
    <div className={
      modal
        ?
        cl.modal
        :
        classNames(cl.modal, cl.modal_hide)
    }
      onClick={() => {
        setModal(false)
      }}
    >
      <div className={cl.modal__wrapper}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className={cl.modal__btn}
          onClick={() => {
            setModal(false)
          }}
        >
          <div className={cl['modal__btn-lines']}></div>
        </button>

        <div className={cl.modal__img}>
          <img className={cl.modal__pict} src={bg} alt='training' />
        </div>

        <div className={cl.modal__content}>

          {children}

        </div>
      </div>
    </div>
  );
};

export default Modal;