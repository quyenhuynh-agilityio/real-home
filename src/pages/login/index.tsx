import React from 'react';

import { GetStaticProps } from 'next';
import ErrorPage from 'next/error';

import { Client } from '../../../prismic-configuration';

import Form from '../../components/Form';
import { RichText } from 'prismic-reactjs';

const Login = (props) => {
  const { log_in_title, email_placeholder, password_placeholder } =
    props.doc.data || {};
  if (!props.doc) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div className="relative">
      <div className="border border-gray-90 rounded p-30 right-0 left-0 ml-auto mr-auto top-125 w-500 absolute">
        <div className="text-center">{RichText.asText(log_in_title)}</div>
        <Form
          email_placeholder={email_placeholder}
          password_placeholder={password_placeholder}
        />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({
  preview = null,
  previewData = {},
}) => {
  const { ref } = previewData || {};

  const client = Client();
  const doc =
    (await client.getSingle('log_in_page', ref ? { ref } : null)) || {};

  return {
    props: {
      doc,
      preview,
    },
  };
};

export default Login;
