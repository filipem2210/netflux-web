import styled from 'styled-components';

import backgroundImage from '../../assets/background-image.jpg';

export const Main = styled.main`
  min-height: 100vh;
  min-height: 450px;
  width: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), transparent, rgba(0, 0, 0, 0.9));
`;

export const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 50px 0;
  align-items: center;

  img{
    height: 50px;
  }

  a{
    background-color: #e50914;
    padding: 8px 18px;
    font-weight: 400;
    color: #fff;
    border-radius: 3px;
    font-size: 16px;
    line-height: normal;
  }
`;

export const Wrapper = styled.section`
    position: relative;
    width: 100%;
    max-width: 950px;
    padding: 65px 0;
    margin: 100px auto 0;
    text-align: center;
    color: #fff;

    h1{
      max-width: 640px;
      margin: 0 auto;
      font-size: 64px;
      font-weight: 700;
    }

    h2{
      font-size: 26px;
      font-weight: 400;
      margin: 26px auto;
    }

    form {
      display: flex;
      max-width: 950px;
      height: 70px;
      margin: 0 45px;
      justify-content: center;
      position: relative;

      label{
        color: #8c8c8c;
        pointer-events: none;
        position: absolute;
        top: 0px;
        left: 0px;
        margin-top: 25px;
        margin-left: 12px;
        transition: all .1s ease-out;
        font-size: 16px;
      }

      input{
        flex: 1.5;
        padding: 0 10px;
        font-size: 18px;
      }

      .required{
        border: 0;
        border-bottom: solid 3px #ffa00a;
      }

      input:focus + label,
      input:not(:placeholder-shown) + label{
        font-size: 13px;
        margin-top: 5px;
        font-weight: 700;
      }

      button{
        display: flex;
        flex: 1;
        background-color: #e50914;
        color: #fff;
        padding: 0 20px;
        border: none;
        text-transform: uppercase;
        border-left: 1px solid #333;
        font-size:30px;
        align-items: center;
        justify-content: center;

        :hover{
          background: #f40612;
        }

        svg {
          margin: 0;
          padding: 0;
          margin-left: 5px;
        }
      }
    }

    p{
      color: #ffa00a;
      text-align: left;
      padding: 6px 0;
      font-size: 15px;
      margin: 0 45px;
    }

    h3{
      font-size: 19px;
      font-weight: 400;
    }
`;
