import React, { useState } from 'react';
// ======= Styles ======
import cl from './FormTraining.module.scss';
// ======= Styles ======
import InputPhone from '../UI/InputPhone/InputPhone';
import Input, {validateVariants} from '../UI/Input/Input';
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
        darkMode={darkMode}
        inputId='userName'

        placeholder='Например Алина'

        inputValue={userName}
        setInputValue={setUserName}

        valid= {validateVariants.valName}
        type="text"
      />

      <InputPhone title='Номер телефона'

        darkMode={darkMode}
        inputId='userPhone'

        inputPhone={userPhone}
        setInputPhone={setUserPhone}

        setPhoneCode={setSelectPhoneCode}
        phoneCode={selectPhoneCode}
      />

      <div className={cl.form__btn}>
        <Button btnStyle={btnStyleVariant.filled}  >
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