import styled from 'styled-components';
import { Fragment } from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';

const MenuStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 1176px;
  margin-top: 64px;
  margin-bottom: 16px;
  padding-bottom: 24px;
  border-bottom: 1px solid #d9d9d9;
  position: relative;
  .filterContainer {
    display: flex;
  }
  .filter {
    margin-left: 24px;
  }
  @media (max-width: 1176px) {
    text-align: center;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    .icon {
      position: relative;
      margin-top: 16px;
      height: 48px;
    }
    .divider {
      display: none;
    }
    /* padding-left: 16px;
    .icon {
      margin-right: 16px;
    } */
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    .filterContainer {
      flex-direction: column;
    }
    .filter {
      margin: 4px;
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
  max-height: 48px;
  align-items: center;
  /* margin-left: 24px; */
  padding: 8px 24px;
  text-align: center;
  border-radius: 24px;
  color: ${props => (props.active ? 'white' : '#a3a3a3')};
  background: ${props => (props.active ? '#0AD4FA' : '#ededed')};
  font-size: 24px;
  &:hover {
    cursor: ${props => (props.active ? 'default' : 'pointer')};
  }
`;

const Menu = ({ bottom, sort = 'most', handleSort }) => (
  <MenuStyled>
    <Products>16 of 32 products</Products>
    {!bottom && (
      <Fragment>
        <Divider className="divider" />
        <Sort>Sort by:</Sort>
        <div className="filterContainer">
          <Filter
            onClick={() => handleSort('most')}
            className="filter"
            active={sort === 'most' ? 1 : 0}
          >
            Most Recent
          </Filter>
          <Filter
            onClick={() => handleSort('low')}
            className="filter"
            active={sort === 'low' ? 1 : 0}
          >
            Lowest Price
          </Filter>
          <Filter
            onClick={() => handleSort('high')}
            className="filter"
            active={sort === 'high' ? 1 : 0}
          >
            Highest Price
          </Filter>
        </div>
      </Fragment>
    )}
    <Icon className="icon">
      <ArrowRightIcon name="Next page" />
    </Icon>
  </MenuStyled>
);

export default Menu;
