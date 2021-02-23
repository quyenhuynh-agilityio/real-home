import React, { ReactNode } from 'react';

type ButtonType = {
  children?: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonType> = ({
  onClick = () => {},
  className = '',
  type = 'button',
  children,
}) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
