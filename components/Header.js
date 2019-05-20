import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import AeroIcon from "./icons/AeroIcon";
import DisplayCoin from "./DisplayCoin";
import NProgress from "nprogress";
import HeaderStyled from "./styled/HeaderStyled";
import React, { useEffect, useState } from "react";
import api from "../services/api";

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
    border: 1px solid linear-gradient(to bottom, #ff8800, #ff6600);
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
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      const result = await api.user.me();
      console.log(JSON.stringify(result));
      setUser(result);
    }
    fetchData();
  }, {});

  return (
    <HeaderStyled {...props}>
      <div className="content">
        <Link href="/">
          <a className="logo">
            <AeroIcon />
          </a>
        </Link>
        {user && (
          <DisplayUser>
            <p>{user.name}</p>
            <DisplayCoin text={user.points} />
          </DisplayUser>
        )}
      </div>
      {/* <Button>INGRESAR</Button> */}
    </HeaderStyled>
  );
};

export default Layout;
