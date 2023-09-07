import { popularProducts } from "../dummyData";
import styled from 'styled-components';
import Product from "./Product";

const Products = () => {

    const Container = styled.div`
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    `;

  return (
    <Container>
        {popularProducts.map(data => (
            <Product data={data} key={data.id} />
        ))}
    </Container>
  )
}

export default Products
