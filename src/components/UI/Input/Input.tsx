import React, { useState } from 'react';
import classNames from 'classnames';
// ======= Styles ======
import cl from './Input.module.scss';


interface IINput {
  title?: string,
  inputId: string,
  placeholder: string,
  inputValue: any,
  setInputValue: any,
  type: string,
  darkMode?: boolean,
}

const Input: React.FC<IINput> = ({ title, inputId, placeholder,
  inputValue, setInputValue, darkMode, ...props }) => {

  const [valid, setValid] = useState<Boolean>(true)

  const checkValidate = (value: string) => {

    const reg = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;

    setValid(reg.test(value))
  }

  return (
    <div>
      <div className={cl.wrapper}>
        <label className={classNames(
          darkMode
            ?
            classNames(cl.label, cl.label_dark)
            :
            cl.label
        )} htmlFor={inputId}> {title} </label>
      </div>

      <input className={
        darkMode
          ?
          // ======= Dark mode true ======
          valid
            ?
            classNames(cl.input, cl.input_dark)
            :
            classNames(cl.input, cl.input_dark, cl.input_warn)
          :
          // ======= Dark mode false ======
          valid
            ?
            cl.input
            :
            classNames(cl.input, cl.input_warn)
      }
        id={inputId}
        placeholder={placeholder}
        {...props}
        required
        spellCheck='true'
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
          checkValidate(e.target.value)
        }}
      />

      <p className={valid ? classNames(cl.warn, cl.warn_hide) : cl.warn} >
        Введите, пожалуйста, корректное имя
      </p>
    </div>
  );
};

export default Input;