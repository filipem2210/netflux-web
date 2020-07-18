import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Context } from '../../contexts/authContext';

import { Main } from './styles';

import logo from '../../assets/logo.svg';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    .max(10, 'A senha pode ter no máximo 10 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignIn() {
  const { handleSignIn } = useContext(Context);

  function checkEmptyEmailInput() {
    const emailInput = document.getElementById('emailSignIn');
    if (emailInput.value === "") {
      emailInput.classList.add('required');
      emailInput.focus();
    }
  }

  return (
    <Main>
      <section>
        <header>
          <Link to="/">
            <img src={logo} alt="Netflux Logo" />
          </Link>
        </header>
        <div>
          <h1>Entrar</h1>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
              handleSignIn(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="input-placement">
                  <Field
                    id="emailSignIn"
                    name="email"
                    type="email"
                    placeholder=" "
                    className={
                      errors.email && touched.email ? 'required' : null
                    }
                  />
                  <label htmlFor="emailSignIn">Email</label>
                </div>
                <p><ErrorMessage name="email" /></p>

                <div className="input-placement">
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="false"
                    maxLength="10"
                    placeholder=" "
                    className={
                      errors.password && touched.password ? 'required' : null
                    }
                  />
                  <label htmlFor="password">Senha</label>
                </div>
                <p><ErrorMessage name="password" /></p>

                <button type="submit" onClick={() => checkEmptyEmailInput()}>Entrar</button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </Main>
  );
}
