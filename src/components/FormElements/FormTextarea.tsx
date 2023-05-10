import React, { ChangeEvent } from 'react';;

interface FormTextareaProps {
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
  labelText?: string;
  classEL: {
    wrapper: string,
    blockInput: string,
    textarea: string,
    label: string,
    errorMessage: string,
  };
  refer?: React.RefObject<HTMLTextAreaElement>;
  errorArray: string[];
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
};

export const FormTextarea: React.FC<FormTextareaProps> = (props) => {
  return (
    <div className={ props.classEL.wrapper }>
      <div className={ props.classEL.blockInput }>
        <textarea
          id={ props.id }
          name={ props.name }
          placeholder={ props.placeholder }
          className={ props.classEL.textarea }
          required={ props.required ? true : false }
          ref={ props.refer }
          onChange={ props.onChange }
          onBlur={ props.onBlur }
          value={ props.value }
        ></textarea>
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