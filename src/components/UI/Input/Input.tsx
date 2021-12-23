import React, {useState} from 'react';
import classNames from 'classnames';
// ======= Styles ======
import cl from './Input.module.scss';

export enum validateVariants {
  valName = 'name'
}

interface IINput {
  title?: string,
  darkMode: boolean,
  inputId: string,
  placeholder: string,
  inputValue: any,
  setInputValue: any,
  type: string,
  valid?: validateVariants,
}

const Input: React.FC<IINput> = ({ title, darkMode, inputId, placeholder, inputValue, setInputValue, ...props }) => {

  const [valid, setValid] = useState<Boolean>(true)

  const checkValidate = (value: string) => {

    const reg = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;

    setValid(reg.test(value))
  }

  return (
    <div>
      <div className={cl.wrapper}>
        <label className={cl.label} htmlFor={inputId}> {title} </label>
      </div>
      <input className={valid ? cl.input : classNames(cl.input, cl.input_warn)}
        id={inputId}
        placeholder={placeholder}
        {...props}
        spellCheck='true'
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
          checkValidate(e.target.value)
        }}
      />

      <p className={ valid ? classNames(cl.warn, cl.warn_hide) : cl.warn } >
        Введите, пожалуйста, корректное имя
      </p>
    </div>
  );
};

export default Input;