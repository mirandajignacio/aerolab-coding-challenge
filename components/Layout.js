import AeroLogo from "./AeroLogo";
import DisplayCoin from "./DisplayCoin";
import Link from "next/link";
import NProgress from "nprogress";
import Router from "next/router";
import styled from "styled-components";

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  console.log("onRouteChangeStart");
};

const Header = styled.header`
  height: 80px;
  background: white;
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9;
  transition: all 0.2s ease;
  box-shadow: ${props =>
    props.scrolling
      ? "0 0 12px 0 rgba(0, 0, 0, 0.12), 0 4px 12px 0 rgba(0, 0, 0, 0.2)"
      : "none"};
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

const Button = styled.button`
  padding: 12px;
  background: white;
  color: #ff8800;
  border-radius: 8px;
  border: 1px solid #ff8800;
  &:hover {
    cursor: pointer;
    color: white;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.12), 0 4px 12px 0 rgba(0, 0, 0, 0.2);
    background: linear-gradient(to bottom, #ff8800, #ff6600);
    border: none;
  }
`;

const DisplayUser = styled.div`
  display: flex;
  align-items: center;
  /* div {
    height: 48px;
    margin-left: 16px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    background: ${props => props.theme.offWhite};
    padding: 12px;
    span {
      margin-right: 4px;
    }
  } */
  p {
    margin: 0%;
    font-size: 20px;
  }
`;

const Layout = props => {
  return (
    <Header {...props}>
      <div className="content">
        <Link href="/">
          <a className="logo">
            <AeroLogo />
          </a>
        </Link>
        <DisplayUser>
          <p>MIRANDA J IGNACIO</p>
          <DisplayCoin text={"6000"} />
        </DisplayUser>
      </div>
      {/* <Button>INGRESAR</Button> */}
    </Header>
  );
};

export default Layout;
