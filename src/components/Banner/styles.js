import styled from 'styled-components';

export const Main = styled.section`
  height: 90vh;
  min-height: 450px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  margin-bottom: 10px;

  .banner_contents {
    align-self: center;
    margin-left: 30px;
    z-index: 2;
    max-width: 360px;
    color: #fff;

    .banner_title {
      font-size: 48px;
      font-weight: bold;
    }

    .banner_description {
      line-height: 1.3;
      margin-top: 20px;
      font-size: 13px;
    }

    .banner_buttons {
      display: flex;
      margin-top: 20px;

      .banner_button {
        color: #fff;
        border: none;
        font-weight: 700;
        border-radius: 4px;
        padding: 8px 24px;
        margin-right: 15px;
        background-color: rgba(75, 75, 75, .6);
        display: flex;
        align-items: center;
      }

      .banner_button_play,
      .banner_button_more_info:hover {
        color: #000;
        background-color: #e6e6e6;
        transition: all .3s;
      }
    }
  }

  .banner_fadeBottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 115px;
    background: linear-gradient(to top, #111, transparent);
    z-index: 1;
  }

  #trailer {
    position: absolute;
    bottom: 0;
    right: 0;
    min-width: 100%;

    &.active {
      z-index: 1;
      animation: fadein 3s;
    }
  }

  @keyframes fadein {
    from {
      z-index: 0;
      opacity: 0;
    }

    to {
      z-index: 1;
      opacity: 1;
    }
  }

  .volumeButton {
    position: absolute;
    bottom: 100px;
    right: 100px;
    border: solid 1px #fff;
    border-radius: 50%;
    padding: 5px;
    display: flex;
    z-index: 2;
    background: transparent;
  }
`;
