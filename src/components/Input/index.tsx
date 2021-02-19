import React, { ReactNode } from 'react';

type InputType = {
  children?: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  type?: 'text';
  name?: string;
  defaultValue?: string | undefined;
  inputRef?: React.RefObject<HTMLInputElement> | null;
  placeholder?: string;
};

const Input = ({
  name = '',
  defaultValue = '',
  type = 'text',
  inputRef = null,
  placeholder = '',
  className = '',
}: InputType) => {
  return (
    <input
      name={name}
      type={type}
      defaultValue={defaultValue}
      ref={inputRef}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
