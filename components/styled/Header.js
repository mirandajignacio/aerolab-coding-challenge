import styled from 'styled-components';

const HeaderStyled = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('/static/header-x1.png');
  background-size: cover;
  background-position: right;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: white;
    align-self: flex-end;
    font-size: 64px;
  }
`;

export default HeaderStyled;
