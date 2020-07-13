import styled from 'styled-components';

import backgroundImage from '../../assets/background-image.jpg';

export const Main = styled.main`
  height: 100vh;
  min-height: 450px;
  width: 100%;
  background: #000;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;

  section {
    min-height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(rgba(0, 0, 0, 0.9), transparent, rgba(0, 0, 0, 0.9));

    header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 20px 50px 0;
      align-items: center;

      img {
        height: 50px;
      }
    }

    div {
      position: relative;
      width: 100%;
      max-width: 450px;
      padding: 60px 68px;
      margin: 50px auto 0;
      text-align: center;
      color: #fff;
      background-color: rgba(0, 0, 0, .75);

      h1 {
        color: #fff;
        margin-bottom: 28px;
        font-size: 32px;
        font-weight: 700;
        text-align: left;
      }

      form{
        .input-placement{
          position: relative;
          padding: 0;
          margin: 0;

          label{
            color: #8c8c8c;
            pointer-events: none;
            position: absolute;
            top: 0px;
            left: 0px;
            margin: 18px 0 0 20px;
            transition: all .1s ease-out;
            font-size: 16px;
          }

          input {
            background: #333;
            width: 100%;
            border-radius: 4px;
            border: 0;
            color: #fff;
            height: 50px;
            line-height: 50px;
            padding: 10px 20px 0;
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
        }

        p{
          color: #ffa00a;
          text-align: left;
          padding-bottom: 20px;
          font-size: 15px;
        }

        button {
          color: #fff;
          background-color: #e50914;
          width: 100%;
          border: 0;
          border-radius: 4px;
          height: 50px;
          line-height: 50px;
          font-weight: bold;
          font-size: 16px;
        }
      }
    }
  }
`;
