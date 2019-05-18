import styled from "styled-components";
import CoinIcon from "../components/CoinIcon";

const Display = styled.div`
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
`;

const DisplayCoin = ({ text }) => (
  <Display>
    <span>{text}</span>
    <CoinIcon />
  </Display>
);

export default DisplayCoin;
