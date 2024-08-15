import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 100vh;
  overflow: scroll;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 25%;
    /* border: 5px solid ${(props) => props.theme.colors.border}; */

    > div:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      h2 {
        margin: 1%;
      }
    }

    > div:last-child {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 100%;

      .card-header:first-child {
        padding-left: 0;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 75%;

    > div:first-child {
      height: 100%;
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;

      > div {
        display: flex;
        flex: 1;
      }
    }

    > div:last-child {
      display: flex;
      flex-wrap: wrap;
      flex: 3;
      justify-content: space-between;
      overflow: scroll;
    }
  }

  .card-chart,
  .card-header {
    display: flex;
    flex: 1;
    width: 100%;
    height: 48%;

    .card {
      display: flex;
      flex-direction: column;
    }

    .label {
      margin-bottom: 0.5rem;
      font-size: ${(props) => props.theme.fonts.sizes.small};
      font-weight: ${(props) => props.theme.fonts.weight.bold};
    }
  }

  .card-header {
    height: 95%;

    > .card {
      > div:first-child {
        margin-bottom: 1rem;
      }

      > div:last-child {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 2;
        align-items: center;

        > svg {
          margin-left: 0.5rem;
        }
      }
    }
  }

  .percentage-chart {
    width: 100%;
    height: 95%;

    text {
      font-family: ${(props) => props.theme.fonts.family};
      color: ${(props) => props.theme.fonts.color.primary};
    }
  }
`;
