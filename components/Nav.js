import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';
import NProgress from 'nprogress';
import React, { useEffect, useState, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AeroIcon from './icons/AeroIcon';
import DisplayCoin from './DisplayCoin';
import NavStyled from './styled/Nav';
import api from '../services/api';
import { setUser } from '../store';

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
class Nav extends Component {
  async componentWillMount() {
    const { setUser: setUserDispatch } = this.props;
    const result = await api.user.me();
    setUserDispatch({ user: result });
    // setUser(result);
  }

  render() {
    const { user } = this.props;
    return (
      <NavStyled>
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
      </NavStyled>
    );
  }
}

// const Nav = () => {
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     async function fetchData() {
//       const result = await api.user.me();
//       console.log(JSON.stringify(result));
//       setUser(result);
//     }
//     fetchData();
//   }, []);

//   return (
//     <NavStyled>
//       <div className="content">
//         <Link href="/">
//           <a className="logo">
//             <AeroIcon />
//           </a>
//         </Link>
//         {user && (
//           <DisplayUser>
//             <p>{user.name}</p>
//             <DisplayCoin text={user.points} />
//           </DisplayUser>
//         )}
//       </div>
//       {/* <Button>INGRESAR</Button> */}
//     </NavStyled>
//   );
// };

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
