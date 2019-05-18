import Link from "next/link";
import styled from "styled-components";
import api from "../services/api";
import React, { useState, useEffect } from "react";
import Products from "../components/Products";

const Flayer = styled.div`
  width: 100%;
  margin-top: 4px;
  height: 400px;
  background-image: url("/static/header-x1.png");
  background-size: cover;
  h1 {
    color: white;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function Index() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await api.products();
      console.log(result);
      setProducts(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Flayer>
        <h1>Electronics</h1>
      </Flayer>
      <Content>
        {products.length > 0 && <Products products={products} />}
      </Content>
    </div>
  );
}
