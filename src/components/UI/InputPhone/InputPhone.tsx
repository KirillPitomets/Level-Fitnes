import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
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
  inputId: string,
  inputPhone: any,
  setInputPhone: any,
  phoneCode: any,
  setPhoneCode: any,
  darkMode?: boolean,
}

const InputNum: React.FC<IINputNum> = ({
  inputId, title, inputPhone, setInputPhone,
  phoneCode, setPhoneCode, darkMode }) => {

  const [openSelect, setOpenSelect] = useState(false);
  const [dialCode, setDialCode] = useState<any | null>('+1');
  const [mask, setMask] = useState<string>('(999) 999 — 99 — 99')

  const removingPrevDialCode = (): string => {
    const phoneNumberArray = inputPhone.split(' ');

    phoneNumberArray[0] = '';

    return phoneNumberArray.join();
  }

  const changeMask = (code: string) => {

    const lastNumberOfCode = code.substring(dialCode.length - 1,)

    if (lastNumberOfCode === '0') {
      setMask('(99) 999 — 99 — 99')
    } else {
      setMask('(999) 999 — 99 — 99')
    }

  }

  const findDialCode = (): void => {

    countriesPhoneCodes.forEach(phone => {
      if (phone.code === phoneCode) {

        setDialCode(phone.dial_code);
        changeMask(phone.dial_code);

        return;

      }

    })
  }

  useEffect(() => {
    findDialCode()
  })

  return (
    <div className={cl.inner_marg}>
      <div className={cl.wrapper}>
        <label className={classNames(
          darkMode
            ?
            classNames(cl.label, cl.label_dark)
            :
            cl.label
        )} htmlFor={inputId}> {title} </label>
      </div>

      <div className={cl['input-wrapper']}>

        <DropdownMenu>

          <DropdownActiveItem
            onClick={() => setOpenSelect( () => {
              return openSelect ? false : true
            })}>
            <img className={cl['country-flag']}
              src={`${window.location.origin}/img/flags/${phoneCode.toLowerCase()}.svg`}
              alt='ru' />
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
                  <img className={cl['country-flag']}
                    src={`${window.location.origin}/img/flags/${phoneCode.code.toLowerCase()}.svg`}
                    alt='ru' />
                </DropdownItem>
              ))
            }
          </DropdownList  >

        </DropdownMenu>

        <InputMask
          className={
            darkMode
              ?
              classNames(cl.input, cl.input_dark)
              :
              cl.input
          }
          mask={`${dialCode} ${mask}`}
          alwaysShowMask={true}
          value={ removingPrevDialCode() }
          onChange={(e) => {
            setInputPhone(e.target.value)
          }}
          required
        />
      </div>

    </div>
  );
};

export default InputNum;