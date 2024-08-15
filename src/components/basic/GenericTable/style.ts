import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.white};

  thead {
    background-color: ${(props) => props.theme.colors.action};
    th {
      text-align: left;
      padding: 1rem;

      span {
        font-size: ${(props) => props.theme.fonts.sizes.small};
        font-weight: ${(props) => props.theme.fonts.weight.bold};
        color: white;
      }
    }
  }

  tbody {
    .table-row {
      border-bottom: 1px solid ${(props) => props.theme.colors.border};
      padding: 1rem;
      font-size: ${(props) => props.theme.fonts.sizes.small};
      color: ${(props) => props.theme.fonts.color.primary};

      td {
        padding: 0.8rem;
      }

      &:hover {
        background-color: #d4d6d8;
        color: white;
      }
    }
  }

  .actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    div {
      margin-left: 0.5rem;
      cursor: pointer;
    }
  }
`;
