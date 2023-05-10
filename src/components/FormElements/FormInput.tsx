import React, { ChangeEvent } from 'react';

type typeInput = 'button' | 'checkbox' | 'file' | 'hidden' | 'image' | 'password' | 'radio' | 'reset' | 'submit' | 'text' | 'color' | 'date' | 'datetime' | 'datetime-local' | 'email' | 'number' | 'range' | 'search' | 'tel' | 'time' | 'url' | 'month' | 'week';

interface FormInputProps {
  id: string;
  name: string;
  type: typeInput;
  placeholder: string;
  required?: boolean;
  labelText?: string;
  classEL: {
    wrapper: string,
    blockInput: string,
    input: string,
    label: string,
    errorMessage: string,
  };
  refer?: React.RefObject<HTMLInputElement>;
  errorArray: string[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export const FormInput: React.FC<FormInputProps> = (props) => {
  return (
    <div className={ props.classEL.wrapper }>
      <div className={ props.classEL.blockInput }>
        <input
          id={ props.id }
          name={ props.name }
          type={ props.type }
          placeholder={ props.placeholder }
          className={ props.classEL.input }
          required={ props.required ? true : false }
          ref={ props.refer }
          onChange={ props.onChange }
          onBlur={ props.onBlur }
          value={ props.value }
        />
        
        <label htmlFor={ props.id } className={ props.classEL.label }>
          { props.labelText ? props.labelText : '' }
        </label>
      </div>
      {
        props.errorArray.map((error: string) => {
          return (
            <span key={ crypto.randomUUID() } className={ props.classEL.errorMessage }>
              { error }
            </span>
          );
        })
      }
    </div>
  );
};