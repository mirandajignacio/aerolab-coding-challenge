import CardItem from "./CardItem";
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  grid-gap: 24px;
  flex-wrap: wrap;
  max-width: 1176px;
  justify-content: space-between;
  /* grid-template-columns: auto; */
  @media (max-width: 876px) {
    justify-content: space-around;
  }
  @media (max-width: 440px) {
    grid-template-columns: 1fr;
  }
`;
const Products = ({ products }) => {
  return (
    <Grid>
      {products != null &&
        products.map(product => {
          return (
            <CardItem className="product" key={product._id} item={product} />
          );
        })}
    </Grid>
  );
};

export default Products;
