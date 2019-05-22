import styled from "styled-components";
import CardItem from "./CardItem";

const Grid = styled.div`
  display: grid;
  /* grid-gap: 24px; */
  grid-column-gap: 24px;

  /* flex-wrap: wrap; */
  max-width: 1176px;
  justify-content: space-between;
  grid-template-columns: repeat(4, 276px);

  grid-template-rows: repeat(4, 300px);

  @media (max-width: 1176px) {
    grid-template-columns: repeat(3, 276px);
    grid-template-rows: repeat(6, 300px);
  }

  @media (max-width: 924px) {
    grid-template-columns: repeat(2, 276px);
    grid-template-rows: repeat(8, 300px);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
const Products = ({ products }) => (
  <Grid>
    {products != null &&
      products.map(product => (
        <CardItem className="product" key={product._id} item={product} />
      ))}
  </Grid>
);

export default Products;
