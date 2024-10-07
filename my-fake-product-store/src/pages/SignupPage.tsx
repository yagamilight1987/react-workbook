import * as React from 'react';
import SignupForm from '../components/auth/SignupForm';
import { Link } from 'react-router-dom';

function SignupPage() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 m-10 rounded-2xl">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-bold">Come join us!</h2>
          <p className="py-6">
            We are so excited to have you here.lf you haven't already, create an
            account to get access to exclusive offers, rewards, and discounts.
            Already have an account?{' '}
            <Link to="/auth/login" className="btn btn-link p-0">
              Signin
            </Link>
          </p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
}

export default SignupPage;
