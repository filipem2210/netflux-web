import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Context } from '../../contexts/authContext';

import logo from '../../assets/logo.svg';

import { Main } from './styles';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    .max(10, 'A senha pode ter no máximo 10 caracteres')
    .required('A senha é obrigatória'),
});

export default function LastStep({ data }) {
  const { handleSignUp } = useContext(Context);
  const { email } = useLocation();

  function checkEmptyPasswordInput() {
    const passwordLastStep = document.getElementById('passwordLastStep');
    if (passwordLastStep.value === "") {
      passwordLastStep.classList.add('required');
      passwordLastStep.focus();
    }
  }

  return (
    <Main>
      <header>
        <Link to="/">
          <img src={logo} alt="Netflux Logo" />
        </Link>
        <Link to="/signin">Entrar</Link>
      </header>
      <section>
        <div className="content">
          <p className="steps">Passo <strong>1</strong> de <strong>3</strong></p>
          <h1>Bem-vindo(a) de volta!</h1>
          <h2>É fácil assinar a Netflix.</h2>
          <p className="instruction">Informe sua senha para começar a assistir.</p>
          <p className="email_label">Email</p>
          <p className="email">{email}</p>
          <Formik
            initialValues={{
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
              const data = {
                email,
                password: values.password
              }
              handleSignUp(data);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="input-placement">
                  <Field
                    id="passwordLastStep"
                    name="password"
                    type="password"
                    autoComplete="false"
                    maxLength="10"
                    placeholder=" "
                    className={
                      errors.password && touched.password ? 'required' : null
                    }
                  />
                  <label htmlFor="passwordLastStep">Informe a senha</label>
                </div>
                <p className="error"><ErrorMessage name="password" /></p>

                <p><a href="/forgot_pwd" className="forgot_password">Esqueceu a senha?</a></p>
                <button
                  type="submit"
                  className="continue"
                  onClick={() => checkEmptyPasswordInput()}
                >
                  Continuar
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </Main>
  )
}
