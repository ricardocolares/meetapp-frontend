import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;

    h1 {
      color: #fff;
    }

    button {
      height: 40px;
      width: 150px;
      background: #f8425f;
      border-radius: 4px;
      border-style: none;
      margin-left: 8px;
      color: #fff;
    }
  }

  img {
    max-width: 800px;
    margin: 30px 10px;
  }

  p {
    color: #fff;
    font-size: 20px;
    font-weight: normal;
  }
`;
