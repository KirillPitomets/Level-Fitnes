import React, { useState, useEffect } from 'react';
// ======= Styles ======
import cl from './InputPhone.module.scss';
// ======= Data ======
import { countriesPhoneCodes } from './countriesPhoneCodes';
// ======= input Mask ======
import InputMask from "react-input-mask";
// ======= Components ======
import { DropdownItem, DropdownMenu, DropdownActiveItem, DropdownList } from '../DropdownMenu/DropdownMenu';

interface IINputNum {
  title?: string,
  darkMode: boolean,
  inputId: string,
  inputPhone: any,
  setInputPhone: any,
  phoneCode: any,
  setPhoneCode: any,
}

const InputNum: React.FC<IINputNum> = ({
  inputId, title, darkMode, inputPhone, setInputPhone,
  phoneCode, setPhoneCode }) => {

  const [openSelect, setOpenSelect] = useState(false);
  const [dialCode, setDialCode] = useState<any | null>('+1');
  const [mask, setMask] = useState<string>('(999) 999 — 99 — 99')

  const findDialCode = () => {

    countriesPhoneCodes.forEach(phone => {
      if (phone.code === phoneCode) {
        setDialCode(phone.dial_code);
        changeMask(phone.dial_code);
      }

    })
  }

  const changeMask = (code?: string) => {
    
    const lastNumber = code?.substring(dialCode.length - 1,)

    if ( lastNumber === '0' ) {
      setMask('(99) 999 — 99 — 99')
    } else {
      setMask('(999) 999 — 99 — 99')
    }
  }

  useEffect(() => {
    findDialCode()
  })

  return (
    <div className={cl.inner_marg}>
      <div className={cl.wrapper}>
        <label className={cl.label} htmlFor={inputId}> {title} </label>
      </div>

      <div className={cl['input-wrapper']}>

        <DropdownMenu>

          <DropdownActiveItem onClick={() => setOpenSelect(() => {
            return openSelect ? false : true
          })}>
            <img className={cl['country-flag']} src={`${window.location.origin}/img/flags/${phoneCode.toLowerCase()}.svg`} alt='ru' />
          </DropdownActiveItem>

          <DropdownList open={openSelect} >
            {
              countriesPhoneCodes.map(phoneCode => (
                <DropdownItem key={phoneCode.code} value={phoneCode.code}
                  onClick={() => {
                    setPhoneCode(phoneCode.code);
                    findDialCode();
                    setOpenSelect(false);
                  }}
                >
                  <img className={cl['country-flag']} src={`${window.location.origin}/img/flags/${phoneCode.code.toLowerCase()}.svg`} alt='ru' />
                </DropdownItem>
              ))
            }
          </DropdownList  >

        </DropdownMenu>

        <InputMask
          className={cl.input}
          mask={`${dialCode} ${mask}`}
          alwaysShowMask={true}
          value={inputPhone}
          onChange={(e) => setInputPhone(e.target.value)}
        />
      </div>

    </div>
  );
};

export default InputNum;