import React from 'react';

import Input from '../Input';

const Form = () => {
  return (
    <div className="flex flex-col">
      <Input placeholder="Please input your email" className="input w-320" />
      <Input placeholder="Please input your password" className="input w-320" />
    </div>
  );
};

export default Form;
