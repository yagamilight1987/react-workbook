import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import classNames from 'classnames';
import * as actions from '../../actions';
import { AppState } from '../../interfaces';

interface LoginFormProps {
  isUserAuthenticated: boolean;
  loginUser: (username: string, password: string) => Promise<void>;
}

class LoginForm extends Component<LoginFormProps> {
  required = (value: any) => (value ? undefined : 'Required');

  onSubmit = async (values: any) => {
    try {
      await this.props.loginUser(values.username, values.password);
    } catch (error: any) {
      return { [FORM_ERROR]: error?.message };
    }
  };

  inputClassNames = (error: boolean, touched: boolean | undefined, submitError: boolean) =>
    classNames({
      'input input-bordered placeholder:text-xs': true,
      'input-error placeholder:text-error': (error && touched) || submitError,
    });

  renderForm = ({ handleSubmit, submitting, submitError }: any) => {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 my-8">
        <div className="flex gap-4 flex-col md:flex-row">
          <Field name="username" validate={this.required}>
            {(props) => {
              return (
                <div className="form-control flex-1">
                  <input
                    type="text"
                    placeholder="Username"
                    className={this.inputClassNames(
                      props.meta.error,
                      props.meta.touched,
                      submitError
                    )}
                    disabled={props.meta.submitting}
                    {...props.input}
                  />
                </div>
              );
            }}
          </Field>

          <Field name="password" validate={this.required}>
            {(props) => {
              return (
                <div className="form-control flex-1">
                  <input
                    type="text"
                    placeholder="Password"
                    className={this.inputClassNames(
                      props.meta.error,
                      props.meta.touched,
                      submitError
                    )}
                    disabled={props.meta.submitting}
                    {...props.input}
                  />
                </div>
              );
            }}
          </Field>
        </div>

        {submitError && <p className="text-error">{submitError}</p>}

        <button type="submit" disabled={submitting} className="btn">
          {submitting ? (
            <span className="loading loading-bars loading-lg"></span>
          ) : (
            'Sign in'
          )}
        </button>
      </form>
    );
  };

  render() {
    const isUserAuthenticated = this.props.isUserAuthenticated;
    if (isUserAuthenticated) {
      return <Navigate to="/" />;
    }
    return <Form onSubmit={this.onSubmit} render={this.renderForm}></Form>;
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    isUserAuthenticated:
      state.authState?.token !== '' && state.authState?.userInfo?.id !== '',
  };
};

const mapDispatchToProps = {
  loginUser: actions.loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
