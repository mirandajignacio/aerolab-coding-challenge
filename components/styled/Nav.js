import styled from 'styled-components';

const Nav = styled.header`
  height: 80px;
  background: white;
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9;
  transition: all 0.2s ease;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.12), 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  .content {
    padding: 4px;
    max-width: ${props => props.theme.maxWidth};
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (max-width: 1440px) {
      padding: 40px;
    }
  }
  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Nav;
