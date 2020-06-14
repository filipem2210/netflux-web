import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IoIosArrowForward as ArrowRight } from 'react-icons/io';

import { Context } from '../../contexts/authContext';

import { Main, Container, Header, Wrapper } from './styles';

import logo from '../../assets/logo.svg';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
});

export default function SignUp() {
  const { handleSignUp } = useContext(Context);

  function checkEmptyEmailInput() {
    const emailInput = document.getElementsByName('email')[0];
    if (emailInput.value === "") {
      emailInput.focus();
      emailInput.classList.add('required')
    }
  }

  return (
    <Main>
      <Container>
        <Header>
          <img src={logo} alt="Netflux Logo" />
          <Link to="/signin">Entrar</Link>
        </Header>
        <Wrapper>
          <h1>Filmes, séries e muito mais. Sem limites.</h1>
          <h2>Assista onde quiser. Cancele quando quiser.</h2>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
              handleSignUp(values);
            }}
          >
            {(props) => (
              <>
                <Form>
                  <Field
                    name="email"
                    type="email"
                    placeholder=" "
                    className={
                      props.errors.email && 'required'
                    }
                  />
                  <label>Email</label>
                  <button type="submit" onClick={() => checkEmptyEmailInput()}>Assine a Netflix <ArrowRight size={30} /></button>
                </Form>
                <p><ErrorMessage name="email" /></p>
              </>
            )}
          </Formik>

          <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
        </Wrapper>
      </Container>
    </Main >
  );
}
