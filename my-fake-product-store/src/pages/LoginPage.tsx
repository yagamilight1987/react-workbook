import React from 'react';
import LoginForm from '../components/auth/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="bg-secondary p-8 px-10 rounded-xl">
      <h1 className="text-4xl text-center">Sign in to your account</h1>
      <LoginForm />
      <p className="text-center">Dont have an account yet? Sign up</p>
    </div>
  );
};

export default LoginPage;
