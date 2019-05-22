import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';
import NProgress from 'nprogress';
import AeroIcon from './icons/AeroIcon';
import DisplayCoin from './DisplayCoin';
import NavStyled from './styled/Nav';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  console.log('onRouteChangeStart');
};

const Button = styled.button`
  padding: 12px;
  background: white;
  color: #ff8800;
  border: none;

  &:focus {
    outline: 0;
  }

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    /* color: white; */
    /* background: linear-gradient(to bottom, #ff8800, #ff6600); */
  }
`;

const DisplayUser = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0%;
    font-size: 20px;
  }
`;

const Nav = props => {
  const { user, handleSignIn } = props;
  return (
    <NavStyled>
      <Link href="/">
        <a className="logo">
          <AeroIcon />
        </a>
      </Link>
      {user ? (
        <DisplayUser>
          <p>{user.name}</p>
          <DisplayCoin text={user.points} />
        </DisplayUser>
      ) : (
        <Button onClick={handleSignIn}>INGRESAR</Button>
      )}
    </NavStyled>
  );
};

export default Nav;
