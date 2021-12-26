import React, { useState } from 'react';
// ======= Styles ======
import cl from './FormTraining.module.scss';
// ======= Styles ======
import InputPhone from '../UI/InputPhone/InputPhone';
import Input from '../UI/Input/Input';
import Button, { btnStyleVariant } from '../UI/Button/Button';


interface IFormTrainig {
  darkMode: boolean
}

const FormTraining: React.FC<IFormTrainig> = ({ darkMode }) => {

  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const [selectPhoneCode, setSelectPhoneCode] = useState('US')

  return (
    <form className={cl.form}>

      <Input title='Имя'
        inputId='userName'
        darkMode={darkMode}
        placeholder='Например Алина'

        inputValue={userName}
        setInputValue={setUserName}

        type="text"
        
        
      />

      <InputPhone title='Номер телефона'

        inputId='userPhone'
        darkMode={darkMode}
        inputPhone={userPhone}
        setInputPhone={setUserPhone}

        setPhoneCode={setSelectPhoneCode}
        phoneCode={selectPhoneCode}
      />

      <div className={cl.form__btn}>
        <Button  btnStyle={btnStyleVariant.filled} onClick={(e) => e.preventDefault()} >
          записать на тренировку
        </Button>
      </div>
      
      <p className={cl.form__text}> 
        Спортивное счастье уже рядом !
      </p>

    </form>
  );
};

export default FormTraining;