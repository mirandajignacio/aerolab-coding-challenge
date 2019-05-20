import CoinIcon from "./icons/CoinIcon";
import styled from "styled-components";

const Display = styled.div`
  height: 48px;
  margin-left: 16px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  background: ${props => props.theme.offWhite};
  padding: 8px 12px;
  span {
    margin-right: 4px;
  }
`;

const DisplayCoin = ({ text }) => (
  <Display>
    <span>{text}</span>
    <CoinIcon name="Coins" />
  </Display>
);

export default DisplayCoin;
