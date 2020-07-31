import styled from 'styled-components';

export const MoviesSeries = styled.section`
  color: #fff;
  margin-left: 20px;

  h2 {
    margin-left: 8px;
  }

  .carousel {
    position: relative;

    .carousel__slider {
      padding: 20px 0;
    }

    .carousel__back-button,
    .carousel__next-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: transparent;
      border: none;

      &:disabled {
        display: none;
      }
    }

    .carousel__back-button {
      left: 0;
    }

    .carousel__next-button {
      right: 20px;
    }
  }

  .row_poster {
    object-fit: contain;
    width: 100%;
    max-height: 100px;
    transition: transform 450ms;

    &:hover {
      transform: scale(1.10);
    }
  }

  .row_posterLarge {
    max-height: 250px;

    &:hover {
      transform: scale(1.15);
    }
  }

  .movieInfo {
    display: flex;
    width: 100%;
    min-height: 390px;
    position: relative;
    background-color: #000;
    margin-bottom: 20px;

    .closeMovieInfoBtn {
      position: absolute;
      top: 10px;
      right: 10px;
      background: transparent;
      border: none;
      transition: transform 250ms;
      z-index: 1;

      &:hover {
        transform: scale(1.09);
      }
    }

    .options {
      position: absolute;
      bottom: 0;
      width: 100%;
      background: transparent;
      background-image: linear-gradient(to top, #000, transparent);
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      z-index: 1;

      button {
        background: transparent;
        color: rgba(255, 255, 255, .7);
        text-transform: uppercase;
        border: none;
        margin: 0 20px;
        padding-bottom: 10px;
        font-weight: bold;
        border-bottom: solid 5px transparent;
        transition: all .2s;

        &:hover {
          background: transparent;
          color: rgba(255, 255, 255, 1);
        }

        &.active {
          color: rgba(255, 255, 255, 1);
          border-bottom: solid 5px red;
        }
      }
    }

    .movieDetails {
      width: 35%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        text-align: center;
        font-size: 40px;
        margin-bottom: 20px;
      }

      .movieDetails_buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;

        .movieDetails_button {
          border: none;
          font-weight: 700;
          border-radius: 4px;
          padding: 8px 24px;
          margin-right: 16px;
          display: flex;
          align-items: center;

          &.movieDetails_button_play,
          &.movieDetails_button_my_list:hover {
            color: #000;
            background-color: #e6e6e6;
            transition: all .3s;
          }

          &.movieDetails_button_my_list {
            color: #fff;
            background-color: rgba(75, 75, 75, .6);
          }
        }

        .like,
        .dislike {
          background: transparent;
          border: solid 1px rgba(255, 255, 255, .5);
          border-radius: 50%;
          display: flex;
          padding: 5px;
          margin-left: 10px;
          transition: all .3s;

          &:hover {
            transform: scale(1.09);
            border: solid 1px rgba(255, 255, 255, 1);
          }
        }
      }
    }

    .trailer {
      width: 65%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      .gradientBg {
        position: absolute;
        width: 15%;
        height: 100%;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 1), transparent);
      }
    }
  }
`;
