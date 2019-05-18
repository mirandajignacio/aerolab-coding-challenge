import styled from "styled-components";
import CardItem from "./CardItem";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 24px;
  max-width: 1176px;
  @media (max-width: 1440px) {
    margin: 0;
    grid-template-columns: 1fr 1fr;
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
          return <CardItem key={product._id} item={product} />;
        })}
    </Grid>
  );
};

export default Products;
