import { useState, useEffect } from 'react';

export type Validations = {
  isEmpty?: boolean;
  minLength?: number | string;
  maxLength?: number | string;
  email?: boolean;
}
/* 
  Кастомный хук валидации элементов формы типы input и textarea.
  Принимает параметры:
  * value - значение поля ввода (строка)
  * validations - объект с параметрами валидации вида:
    {
      isEmpty: true,
      minLength: 3,
    }
*/
export const useValidation = (value: string, validations: Validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLength, setMinLength] = useState(false);
  const [maxLength, setMaxLength] = useState(false);
  const [email, setEmail] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const val = value.trim();
    //eslint-disable-next-line
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

    for (let validation in validations) {
      switch (validation) {
        case 'isEmpty':
          val.length ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case 'minLength':
          val.length < Number(validations[validation]) ? setMinLength(true) : setMinLength(false);
          break;
        case 'maxLength':
          val.length > Number(validations[validation]) ? setMaxLength(true) : setMaxLength(false);
          break;
        case 'email':
          re.test(val) ? setEmail(false) : setEmail(true);
          break;
        default:
          break;
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (isEmpty || minLength || maxLength || email) {
      setIsValid(false);
    } else {
      setIsValid(true);
    };
  }, [isEmpty, minLength, maxLength, email])

  return {
    isEmpty,
    minLength,
    maxLength,
    email,
    isValid
  }
};