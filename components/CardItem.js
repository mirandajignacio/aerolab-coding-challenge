import styled from "styled-components";
import BuyIcon from "../components/BuyIcon";
import CoinIcon from "../components/CoinIcon";

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
  padding: 12px;
  &:hover {
    transition: all 0.2s ease;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.12), 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  }
`;
const Image = styled.img`
  width: 252px;
  height: 182px;
`;
const Divider = styled.div`
  width: 228px;
  border-bottom: 1px solid #d9d9d9;
`;
const Overlay = styled.div``;

const Wrapper = styled.div`
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  right: 0px;
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

const CardItem = ({ item }) => {
  const { _id: id, name, cost, category, img } = item;
  return (
    <Card>
      <Wrapper>
        <Icon>
          {cost > 6000 ? (
            <DisplayCoin>
              <span>Necistas {cost}</span>
              <div>
                <CoinIcon />
              </div>
            </DisplayCoin>
          ) : (
            <BuyIcon />
          )}
        </Icon>
        <Image src={img.url} />
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
