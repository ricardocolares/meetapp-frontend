import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;
      width: 800px;
      border-radius: 4px;
      background: #17141c;
    }

    input {
      display: none;
    }
  }
`;
