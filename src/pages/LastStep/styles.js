import styled from 'styled-components';

export const Main = styled.main`
  min-height: 100vh;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 50px;
    align-items: center;
    border-bottom: 1px solid rgba(9, 9, 9, .1);
    height: 90px;

    img{
      height: 46px;
      object-fit: contain;
    }

    a{
      font-weight: 700;
      color: #000;
      font-size: 18px;
      letter-spacing: 1px;
    }
  }

  section {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    .content{
      display: flex;
      flex-direction: column;
      padding: 20px;
      margin-top: 20px;
      max-width: 500px;
      color: #333;

      .steps {
        text-transform: uppercase;
      }

      h1 {
        font-size: 23px;
        margin-top: 10px;
      }

      h2 {
        font-size: 23px;
      }

      .instruction {
        font-size: 18px;
        margin-top: 10px;
      }

      .email_label {
        margin-top: 10px;
      }

      .email {
        font-weight: bold;
        margin-bottom: 20px;
      }

      form{
        .input-placement{
          position: relative;
          padding: 0;
          margin: 0;

          label{
            color: #6f6f6f;
            pointer-events: none;
            position: absolute;
            top: 0px;
            left: 0px;
            margin: 18px 0 0 20px;
            transition: all .1s ease-out;
            font-size: 16px;
          }

          input {
            width: 100%;
            border-radius: 2px;
            border: solid 1px #999;
            color: #333;
            height: 55px;
            line-height: 55px;
            padding: 10px 20px 0;
          }

          .required{
            border: 0;
            border: solid 1px #e50914;
          }

          input:focus + label,
          input:not(:placeholder-shown) + label{
            font-size: 13px;
            margin-top: 5px;
            font-weight: 700;
          }
        }

        .error {
          color: #e50914;
          text-align: left;
          padding-bottom: 20px;
          font-size: 15px;
        }
      }

      .last_step_pwd {
        padding: 15px;
        margin-top: 15px;
      }

      .forgot_password {
        color: #0071eb;
        font-size: 16px;

        :hover {
          text-decoration: underline;
        }
      }

      .continue {
        color: #fff;
        background-color: #e50914;
        border: 0;
        border-radius: 4px;
        padding: 15px;
        margin-top: 20px;
        text-align: center;
        text-transform: uppercase;
        width: 100%;
        font-size: 18px;
      }
    }
  }
`;
