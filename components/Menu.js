import ArrowRightIcon from "./icons/ArrowRightIcon";
import styled from "styled-components";

const MenuStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 100%;
  /* max-width: 1176px; */
  margin-top: 64px;
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid #d9d9d9;
  position: relative;
  @media (max-width: 1176px) {
    padding-right: 8px;
    padding-left: 8px;
    .icon {
      margin-right: 8px;
    }
  }
`;

const Icon = styled.div`
  position: absolute;
  right: 0px;
  cursor: pointer;
`;

const Sort = styled.span`
  color: #a3a3a3;
`;

const Products = styled.div`
  color: #616161;
`;

const Divider = styled.div`
  height: 48px;
  border: 0.5px solid #d9d9d9;
  margin: 0 24px;
`;

const Filter = styled.div`
  /* align-self: flex-end; */
  display: flex;
  height: 48px;
  align-items: center;
  margin-left: 24px;
  padding: 8px 24px;
  border-radius: 24px;
  color: ${props => (props.active ? "white" : "#a3a3a3")};
  background: ${props => (props.active ? "#0AD4FA" : "#ededed")};
  font-size: 24px;
  &:hover {
    cursor: ${props => (props.active ? "default" : "pointer")};
  }
`;

const Menu = ({ bottom }) => {
  return (
    <MenuStyled>
      <Products>16 of 32 products</Products>
      {!bottom && (
        <>
          <Divider />
          <Sort>Sort by:</Sort>
          <Filter active={true ? 1 : 0}>Most Recent</Filter>
          <Filter>Lowest Price</Filter>
          <Filter>Highest Price</Filter>
        </>
      )}

      <Icon className="icon">
        <ArrowRightIcon name="Next page" />
      </Icon>
    </MenuStyled>
  );
};

export default Menu;
