import React, { useEffect, useState } from "react";

import BuyIcon from "../components/BuyIcon";
import CoinIcon from "../components/CoinIcon";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  min-width: 276px;
  min-height: 276px;
  max-width: 276px;
  max-height: 276px;
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-bottom: 24px;
  &:hover {
    transition: all 0.2s ease;
    box-shadow: ${props =>
      props.disabled
        ? "1px 1px 2px 0 rgba(0, 0, 0, 0.1)"
        : "0 0 12px 0 rgba(0, 0, 0, 0.12), 0 4px 12px 0 rgba(0, 0, 0, 0.2)"};
    .overlay {
      display: flex;
    }
  }
`;
const Overlay = styled.div`
  display: none;
  min-width: 276px;
  min-height: 276px;
  max-width: 276px;
  max-height: 276px;
  position: absolute;
  background: linear-gradient(to bottom, #0ad4fa, #25bbf1);
  opacity: 0.86;
  z-index: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    color: white;
    font-size: 36px;
    margin-right: 8px;
  }
`;
const Image = styled.img`
  max-width: 252px;
  max-height: 182px;
`;
const Divider = styled.div`
  width: 228px;
  border-bottom: 1px solid #d9d9d9;
`;

const Wrapper = styled.div`
  padding: 12px;
  position: relative;
`;
const DisplayImage = styled.div`
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  right: 0px;
  z-index: 3;
`;

const Name = styled.p`
  font-size: 18px;
  max-height: 18px;
`;

const Category = styled.p`
  font-size: 16px;
  max-height: 16px;
  margin-bottom: 2px;
  color: #a3a3a3;
`;

const Information = styled.div`
  margin-left: 24px;
  align-self: flex-start;
`;

const DisplayCoin = styled.div`
  height: 48px;
  margin-left: 16px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  font-size: 14px;
  background: #616161;
  color: white;
  padding: 12px;
  opacity: 0.8;
  span {
    margin-right: 4px;
  }
  div {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
  }
`;
const Action = styled.div`
  cursor: pointer;
  height: 36px;
  background: white;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-radius: 24px;
  padding: 8px 64px;
  margin-top: 12px;
  span {
    color: #616161;
    font-size: 18px;
  }
`;
const CardItem = ({ item }) => {
  const [hover, setHover] = useState(false);
  const canBuy = cost > 1000;
  const { _id: id, name, cost, category, img } = item;
  return (
    <Card
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      disabled={cost > 1000}
    >
      {cost < 1000 ? (
        <Overlay className="overlay">
          <div>
            <span>{cost}</span>
            <CoinIcon />
          </div>
          <Action>
            <span>REDEEM NOW</span>
          </Action>
        </Overlay>
      ) : null}

      <Wrapper>
        <DisplayImage>
          <Icon>
            {cost > 1000 ? (
              <DisplayCoin>
                <span>You need {cost}</span>
                <div>
                  <CoinIcon />
                </div>
              </DisplayCoin>
            ) : (
              <BuyIcon white={hover ? true : null} />
            )}
          </Icon>
          <Image src={img.url} />
        </DisplayImage>
      </Wrapper>
      <Divider />
      <Information>
        <Category>{category}</Category>
        <Name>{name}</Name>
      </Information>
    </Card>
  );
};

export default CardItem;
