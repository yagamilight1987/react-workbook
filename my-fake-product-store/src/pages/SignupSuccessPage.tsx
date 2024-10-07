import * as React from 'react';
import { Link } from 'react-router-dom';

function SignupSuccessPage() {
  return (
    <>
      <div className="bg-base-300 shadow-md rounded-lg p-8 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          stroke="none"
          fill="currentColor"
          className="h-32 w-32 mx-auto mb-4"
        >
          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
        </svg>
        <h1 className="text-2xl font-semibold">Signup Successful!</h1>

        <p className="mt-2">
          Thank you for signing up. Your account has been created successfully.
          You can now log in and start using our services!
        </p>

        <Link to="/auth/login" className="mt-4 btn bg-base-100">
          Go to Login
        </Link>
      </div>
    </>
  );
}

export default SignupSuccessPage;
