import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  type?: 'text';
  name?: string;
  defaultValue?: string | undefined;
  inputRef?: React.RefObject<HTMLInputElement> | null;
  placeholder?: string;
};

const Input: React.FC<Props> = ({
  name = '',
  defaultValue = '',
  type = 'text',
  inputRef = null,
  placeholder = '',
  className = '',
}) => {
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
