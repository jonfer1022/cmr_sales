import styled from 'styled-components';

export const NavbarContainer = styled.div`
  background: linear-gradient(
      195deg,
      rgba(66, 66, 74, 0.4),
      rgba(25, 25, 25, 0.4)
    ),
    url('https://demos.creative-tim.com/material-dashboard-react/static/media/bg-sign-up-cover.30c5950b22e74f0d82ba.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 350px;
  border-radius: 10px;

  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;

    div:first-child {
      flex: 1;
    }

    > div:nth-child(2) {
      flex: 2;
      display: flex;
      flex-direction: row;

      div {
        display: flex;
        justify-content: center;
      }
    }

    div:last-child {
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }

    span {
      color: white;
      font-family: ${({ theme }) => theme.fonts.family};
    }
  }
`;
