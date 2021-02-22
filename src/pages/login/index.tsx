import React from 'react';

import { GetServerSideProps, NextPage } from 'next';
import ErrorPage from 'next/error';

import Form from '../../components/Form';
type User = {
  id: string;
  name: string;
  email: string;
};

type Users = User[];

const Login: NextPage<{ users: Users[] }> = (props) => {
  if (!props.users) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div className="relative">
      <div className="border border-gray-90 rounded p-30 right-0 left-0 ml-auto mr-auto top-125 w-500 absolute">
        <div className="text-center">Real Home login</div>
        <Form />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch(`http://localhost:8000/user`);
  const users: Users = await result.json();

  return {
    props: {
      users,
    },
  };
};

export default Login;
