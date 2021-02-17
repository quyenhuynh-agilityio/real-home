import React, { ReactNode } from 'react';

type ButtonType = {
  children?: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({
  onClick = () => {},
  className = '',
  type = 'button',
  children,
}: ButtonType) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
