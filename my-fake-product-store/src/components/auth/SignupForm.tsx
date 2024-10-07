import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Field, Form } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import classNames from 'classnames';
import * as actions from '../../actions';
import { UserInfo } from '../../interfaces';

function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (formData: UserInfo) => {
    try {
      await dispatch(actions.signupUser(formData));
      navigate('/auth/signup/success');
    } catch (error) {
      return { [FORM_ERROR]: 'Error occured!' };
    }
  };

  const required = (value: any) => (value ? undefined : 'Required');

  const inputClassNames = (error: boolean, touched: boolean | undefined) =>
    classNames({
      'input input-bordered placeholder:text-xs': true,
      'input-error placeholder:text-error': error && touched,
    });

  const inputErrorLabel = (error: boolean, touched: boolean | undefined) => {
    return null;
    return (
      error &&
      touched && (
        <label className="label">
          <span className="label-text text-error">Required</span>
        </label>
      )
    );
  };

  const generateLabel = (value: string) => {
    return null;
    return (
      <label className="label">
        <span className="label-text">{value}*</span>
      </label>
    );
  };

  const initialValues = {};

  return (
    <div className="card bg-base-100 w-full shadow-2xl">
      <Form onSubmit={handleSubmit} initialValues={initialValues}>
        {(props) => {
          return (
            <form className="card-body gap-8" onSubmit={props.handleSubmit}>
              <h1 className="text-4xl text-center">Signup</h1>

              <div className="flex gap-4 flex-col md:flex-row">
                <Field name="name.firstname" validate={required}>
                  {(props) => {
                    return (
                      <div className="form-control flex-1">
                        {generateLabel('First Name')}
                        <input
                          type="text"
                          placeholder="Firstname"
                          className={inputClassNames(
                            props.meta.error,
                            props.meta.touched
                          )}
                          disabled={props.meta.submitting}
                          {...props.input}
                        />
                        {inputErrorLabel(props.meta.error, props.meta.touched)}
                      </div>
                    );
                  }}
                </Field>

                <Field name="name.lastname" validate={required}>
                  {(props) => {
                    return (
                      <div className="form-control flex-1">
                        {generateLabel('Last Name')}
                        <input
                          type="text"
                          placeholder="Lastname"
                          className={inputClassNames(
                            props.meta.error,
                            props.meta.touched
                          )}
                          disabled={props.meta.submitting}
                          {...props.input}
                        />
                        {inputErrorLabel(props.meta.error, props.meta.touched)}
                      </div>
                    );
                  }}
                </Field>
              </div>

              <Field name="email" validate={required}>
                {(props) => {
                  return (
                    <div className="form-control">
                      {generateLabel('Email')}
                      <input
                        type="email"
                        placeholder="Email"
                        className={inputClassNames(
                          props.meta.error,
                          props.meta.touched
                        )}
                        disabled={props.meta.submitting}
                        {...props.input}
                      />
                      {inputErrorLabel(props.meta.error, props.meta.touched)}
                    </div>
                  );
                }}
              </Field>

              <div className="flex gap-4 flex-col md:flex-row">
                <Field name="username" validate={required}>
                  {(props) => {
                    return (
                      <div className="form-control flex-1">
                        {generateLabel('Username')}
                        <input
                          type="text"
                          placeholder="Username"
                          className={inputClassNames(
                            props.meta.error,
                            props.meta.touched
                          )}
                          disabled={props.meta.submitting}
                          {...props.input}
                        />
                        {inputErrorLabel(props.meta.error, props.meta.touched)}
                      </div>
                    );
                  }}
                </Field>

                <Field name="password" validate={required}>
                  {(props) => {
                    return (
                      <div className="form-control flex-1">
                        {generateLabel('Password')}
                        <input
                          type="password"
                          placeholder="Password"
                          className={inputClassNames(
                            props.meta.error,
                            props.meta.touched
                          )}
                          disabled={props.meta.submitting}
                          {...props.input}
                        />
                        {inputErrorLabel(props.meta.error, props.meta.touched)}
                      </div>
                    );
                  }}
                </Field>
              </div>

              <Field name="phone" validate={required}>
                {(props) => {
                  return (
                    <div className="form-control flex-1">
                      {generateLabel('Phone')}
                      <input
                        type="tel"
                        placeholder="Phone"
                        className={inputClassNames(
                          props.meta.error,
                          props.meta.touched
                        )}
                        disabled={props.meta.submitting}
                        {...props.input}
                      />
                      {inputErrorLabel(props.meta.error, props.meta.touched)}
                    </div>
                  );
                }}
              </Field>

              <div className="flex gap-4 flex-col md:flex-row">
                <Field name="address.number" validate={required}>
                  {(props) => {
                    return (
                      <div className="form-control w-40">
                        {generateLabel('House#')}
                        <input
                          type="text"
                          placeholder="House#"
                          className={inputClassNames(
                            props.meta.error,
                            props.meta.touched
                          )}
                          disabled={props.meta.submitting}
                          {...props.input}
                        />
                        {inputErrorLabel(props.meta.error, props.meta.touched)}
                      </div>
                    );
                  }}
                </Field>

                <Field name="address.street" validate={required}>
                  {(props) => {
                    return (
                      <div className="form-control flex-1">
                        {generateLabel('Street')}
                        <input
                          type="text"
                          placeholder="Street"
                          className={inputClassNames(
                            props.meta.error,
                            props.meta.touched
                          )}
                          disabled={props.meta.submitting}
                          {...props.input}
                        />
                        {inputErrorLabel(props.meta.error, props.meta.touched)}
                      </div>
                    );
                  }}
                </Field>
              </div>

              <div className="flex gap-4 flex-col md:flex-row">
                <Field name="address.city" validate={required}>
                  {(props) => {
                    return (
                      <div className="form-control flex-1">
                        {generateLabel('City')}
                        <input
                          type="text"
                          placeholder="City"
                          className={inputClassNames(
                            props.meta.error,
                            props.meta.touched
                          )}
                          disabled={props.meta.submitting}
                          {...props.input}
                        />
                        {inputErrorLabel(props.meta.error, props.meta.touched)}
                      </div>
                    );
                  }}
                </Field>

                <Field name="address.zipcode" validate={required}>
                  {(props) => {
                    return (
                      <div className="form-control w-52">
                        {generateLabel('Zipcode')}
                        <input
                          type="text"
                          placeholder="Zipcode"
                          className={inputClassNames(
                            props.meta.error,
                            props.meta.touched
                          )}
                          disabled={props.meta.submitting}
                          {...props.input}
                        />
                        {inputErrorLabel(props.meta.error, props.meta.touched)}
                      </div>
                    );
                  }}
                </Field>
              </div>

              <div className="flex gap-4 flex-col md:flex-row">
                <Field name="address.geolocation.lat" validate={required}>
                  {(props) => {
                    return (
                      <div className="form-control flex-1">
                        {generateLabel('Latitude')}
                        <input
                          type="text"
                          placeholder="Latitude"
                          className={inputClassNames(
                            props.meta.error,
                            props.meta.touched
                          )}
                          disabled={props.meta.submitting}
                          {...props.input}
                        />
                        {inputErrorLabel(props.meta.error, props.meta.touched)}
                      </div>
                    );
                  }}
                </Field>

                <Field name="address.geolocation.long" validate={required}>
                  {(props) => {
                    return (
                      <div className="form-control flex-1">
                        {generateLabel('Longitude')}
                        <input
                          type="text"
                          placeholder="Longitude"
                          className={inputClassNames(
                            props.meta.error,
                            props.meta.touched
                          )}
                          disabled={props.meta.submitting}
                          {...props.input}
                        />
                        {inputErrorLabel(props.meta.error, props.meta.touched)}
                      </div>
                    );
                  }}
                </Field>
              </div>

              {props.submitError && (
                <p className="text-error">{props.submitError}</p>
              )}

              <button type="submit" className="btn">
                {props.submitting ? (
                  <span className="loading loading-bars loading-lg"></span>
                ) : (
                  'Signup'
                )}
              </button>
            </form>
          );
        }}
      </Form>
    </div>
  );
}

export default SignupForm;
