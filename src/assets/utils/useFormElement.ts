import { useState, ChangeEvent } from 'react';
import { useValidation, Validations } from './useValidation';

/* 
  Кастомный хук, посредством которого производятся следующие функции:
  1. Запускается валидация полей 
  2. Меняется значение focus, если на поле формы произошло событие blur
  3. Изменяет значение  в полях, тем самым, делая из управляемыми
*/
export const useFormElement = (initialValue: string, validations: Validations) => {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);

  const valid = useValidation(value, validations);

  const handlerBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(true);
  };

  const handlerChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    setValue,
    handlerBlur,
    handlerChange,
    isFocused,
    setIsFocused,
    ...valid,
  }
};