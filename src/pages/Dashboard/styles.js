import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;

    button {
      height: 40px;
      width: 150px;
      background: #f8425f;
      border-radius: 4px;
      border-style: none;
      margin-left: 8px;
      color: #fff;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Meetup = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #211c28;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.avalible ? '#999' : '#FFF')};
    font-size: 20px;
    font-weight: normal;
  }

  time {
    display: block;
    color: ${props => (props.avalible ? '#999' : '#fff')};
    font-size: 14px;
    font-weight: normal;
  }

  button {
    margin-left: 5px;
    border: 0;
    background: none;
  }
`;
