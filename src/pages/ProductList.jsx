import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { iphone12Pro } from '../responsive';


const ProductList = () => {

    const Container = styled.div`
        
    `;
    const Title = styled.h1`
        margin: 20px;
    `;
    const FilterContainer = styled.div`
        display: flex;
        justify-content: space-between;
    `;
    const Filter = styled.div`
        margin: 20px;
        ${iphone12Pro({
            margin: "0px 20px",
            display: "flex",
            flexDirection: "column",
        })}
    `;
    const FilterText = styled.span`
        font-size: 20px;
        font-weight: 600;  
        margin-right: 20px;
        ${iphone12Pro({
            marginRight: "0px",
            marginBottom: "10px",
        })}
    `;
    const Select = styled.select`
        padding: 10px;
        margin-right: 20px;
        ${iphone12Pro({
            marginRight: "0px",
            marginBottom: "10px",
        })}
    `;
    const Option = styled.option`
        
    `;

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Products</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter</FilterText>
                <Select>
                    <Option disabled selected>Type</Option>
                    <Option>Watch</Option>
                    <Option>Suit</Option>
                    <Option>Coat</Option>
                    <Option>Bag</Option>
                    <Option>Clothes</Option>
                    <Option>Glasses</Option>
                    <Option>Clothes</Option>
                    <Option>Full Cody</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                    <Option>Hottest</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductList
