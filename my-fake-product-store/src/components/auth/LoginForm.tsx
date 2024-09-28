import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

interface LoginFormProps {
    loginUser: (username: string, password: string) => void;
}

class LoginForm extends Component<LoginFormProps> {
  required = (value: any) => (value ? undefined : 'Required');

  onSubmit = async (values: any) => {
    this.props.loginUser(values.username, values.password);
  };

  renderForm = ({ handleSubmit, submitting }: any) => {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 my-8">
        <Field name="username" validate={this.required}>
          {({ input, meta }) => (
            <div>
              <label className="text-center">Your username*</label>
              <input
                {...input}
                type="text"
                placeholder="Username"
                className={`block px-3 py-3 w-full my-3 mx-auto rounded-lg border-2 text-primary ${
                  meta.touched && meta.error
                    ? 'border-red-600'
                    : 'border-transparent'
                }`}
              />
              {meta.error && meta.touched && (
                <p className="text-red-600 text-xs">{meta.error}</p>
              )}
            </div>
          )}
        </Field>
        <Field name="password" validate={this.required}>
          {({ input, meta }) => (
            <div>
              <label className="text-center">Password*</label>
              <input
                {...input}
                type="password"
                placeholder="Password"
                className={`block px-3 py-3 w-full my-3 mx-auto rounded-lg border-2 text-primary ${
                  meta.touched && meta.error
                    ? 'border-red-600'
                    : 'border-transparent'
                }`}
              />
              {meta.error && meta.touched && (
                <p className="text-red-600 text-xs">{meta.error}</p>
              )}
            </div>
          )}
        </Field>
        <button
          type="submit"
          disabled={submitting}
          className="hover:bg-primary p-4 rounded-lg"
        >
          Sign in
        </button>
      </form>
    );
  };

  render() {
    return <Form onSubmit={this.onSubmit} render={this.renderForm}></Form>;
  }
}

const mapDispatchToProps = {
    loginUser: actions.loginUser
};

export default connect(null, mapDispatchToProps)(LoginForm);
