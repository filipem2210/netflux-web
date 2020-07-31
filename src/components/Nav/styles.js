import styled from 'styled-components';

export const Main = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  z-index: 9;
  transition-timing-function: ease-in;
  transition: all .5s;
  justify-content: space-between;

  &.nav_black {
    background-color: #111;
  }

  .logo_btns {
    display: flex;
    align-items: center;

    a:first-child {
      padding: 0;

      img {
        margin-right: 20px;
        width: 80px;
        object-fit: contain;
      }
    }

    a {
      padding: 0 10px;
      color: #fff;

      &.active {
        font-weight: bold;
      }
    }
  }

  .actions {
    display: flex;

    button {
      background: transparent;
      border: none;
      padding: 0 10px;
    }

    .search {
      background-color: rgba(1, 1, 1, .8);
      border: solid 1px #fff;
      padding: 5px;
      color: #fff;
      opacity: 0;
      width: 200px;

      &.active {
        animation-name: searchInputAnimation;
        animation-duration: .5s;
        opacity: 1;
      }
    }

    @keyframes searchInputAnimation {
      from {
        width: 0;
        opacity: 0;
      }

      to {
        width: 200px;
        opacity: 1;
      }
    }

    .nav_avatar {
      width: 30px;
      margin-left: 10px;
      object-fit: contain;
      cursor: pointer;
    }
  }
`;

export const Results = styled.div`
  height: 90vh;
  width: 100%;
  padding-top: 80px;
  display: none;
  position: absolute;
  z-index: 5;
  background-color: #111;

  &.active {
    display: block;
    animation-name: resultsAnimation;
    animation-duration: 1s;
  }

  @keyframes resultsAnimation {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
