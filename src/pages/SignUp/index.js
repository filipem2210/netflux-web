import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IoIosArrowForward as ArrowRight } from 'react-icons/io';

import { Main } from './styles';

import logo from '../../assets/logo.svg';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
});

export default function SignUp() {
  const history = useHistory();

  function checkEmptyEmailInput() {
    const emailInput = document.getElementById('emailSignUp');
    if (emailInput.value === "") {
      emailInput.classList.add('required');
      emailInput.focus();
    }
  }

  function handleSubmit(values) {
    history.push({
      pathname: '/laststep',
      email: values.email
    });
  }

  return (
    <Main>
      <section>
        <header>
          <img src={logo} alt="Netflux Logo" />
          <Link to="/signin">Entrar</Link>
        </header>
        <div>
          <h1>Filmes, séries e muito mais. Sem limites.</h1>
          <h2>Assista onde quiser. Cancele quando quiser.</h2>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
              handleSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <>
                <Form>
                  <Field
                    id="emailSignUp"
                    name="email"
                    type="email"
                    placeholder=" "
                    className={
                      errors.email && touched.email ? 'required' : null
                    }
                  />
                  <label htmlFor="emailSignUp">Email</label>
                  <button type="submit" onClick={() => checkEmptyEmailInput()}>Vamos lá <ArrowRight size={30} /></button>
                </Form>
                <p><ErrorMessage name="email" /></p>
              </>
            )}
          </Formik>

          <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
        </div>
      </section>
    </Main >
  );
}
