import React from 'react';

import Input from '../Input';
import { RichText } from 'prismic-reactjs';

const Form = ({ email_placeholder, password_placeholder }) => {
  return (
    <div className="flex flex-col">
      <Input
        placeholder={RichText.asText(email_placeholder)}
        className="input-custom w-320"
      />
      <Input
        placeholder={RichText.asText(password_placeholder)}
        className="input-custom w-320"
      />
    </div>
  );
};

export default Form;
