import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from '../Login/Login.module.scss';
import coffeeBeansImage from '../../assets/images/coffeeBeans.png';
import pizzaImage from '../../assets/images/pizzaTop.png';
import burgerImage from '../../assets/images/burgerButton.png';

const FormInput = ({ field, form, ...props })=>{
  return <input className={ `${ styles.formInput } fz-16 w-100 lh-20` }  { ...field } { ...props } />;
}

const validate = (values) => {
  const errors = {};
  //email
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  // password
  const passwordRegex = /(?=.*[0-9])/;
  if (!values.password) {
      errors.password = 'Required';
  } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 characters long.';
  } else if (!passwordRegex.test(values.password)) {
      errors.password = 'Invalid password. Must contain one number.';
  }

  if (values.password!==values.repeatedPassword){
    errors.repeatedPassword = 'Passwords do not match';
  }
  return errors;
}

const SingUp = () => {
    return (
      <div className={ `${ styles.loginContainer } is-flex is-flex-direction-column` }>
        <Formik
        initialValues={ { email: '', password: '',repeatedPassword: '' } }
        validate={ validate }
        onSubmit={ (values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        } }
      >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <div className={ `${ styles.loginContainer__header } is-flex is-justify-content-center is-align-items-center` }>
                <div className={ `${ styles.loginContainer__header__text } fz-40 text-center` }>Welcome!</div>
                <img className={ styles.loginContainer__header__coffeeBeansImage } src={ coffeeBeansImage } alt="" />
                <img className={ styles.loginContainer__header__burgerImageSingUp } src={ burgerImage } alt="" />
                <img className={ styles.loginContainer__header__pizzaImageSingUp } src={ pizzaImage } alt="" /> 
              </div>
              <div className={ `${ styles.loginContainer__inputContainer }` }>
                <div className={ styles.loginContainer__inputContainer__inputGroup }>
                  <label className={ `${ styles.input__label } fz-18 lh-20 w-300` } htmlFor='email'>Email</label>
                  <Field  type="email" name="email" placeholder="Login" component={ FormInput }/>
                  { touched.email && errors.email ? <div className={ styles.errorsMessage }>{errors.email}</div> : null}
                </div>
                <div className={ styles.loginContainer__inputContainer__inputGroup }>
                  <label className={ `${ styles.input__label } fz-18 lh-20 w-300` } htmlFor='password'>Password</label>
                  <Field  type="password" name="password" placeholder="Password" component={ FormInput }/>
                  { touched.password && errors.password ? <div className={ `${ styles.errorsMessage } lh-20 fz-18 w-300` }>{errors.password}</div> : null}
                </div>
                <div className={ styles.loginContainer__inputContainer__inputGroup }>
                  <label className={ `${ styles.input__label } fz-18 lh-20 w-300` } htmlFor='repeatedPassword'>Repeat password</label>
                  <Field  type="password" name="repeatedPassword" placeholder="Repeat password" component={ FormInput }/>
                  { touched.repeatedPassword && errors.repeatedPassword ? <div className={ `${ styles.errorsMessage } lh-20 fz-18 w-300` }>{errors.repeatedPassword}</div> : null}
                </div>
              </div>
              <div className={ `${ styles.loginContainer__buttonContainer } w-100 ` }>
                <button
                  type= { 'submit' }
                  disabled={ isSubmitting }
                  className={ `${ styles.button } w-100 fz-18 text-center px-5` }
                >
                  <span className={ styles.button__text }> SingUp </span>
                </button>
              </div>
            </Form>
        )}
        </Formik>
      </div>
    )
  };
  
export default SingUp;