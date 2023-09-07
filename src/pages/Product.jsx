import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { iphone12Pro } from '../responsive';


const Product = () => {

    const Container = styled.div`

    `;
    const Wrapper = styled.div`
        padding: 50px;
        display: flex;
        ${iphone12Pro({
            padding: "10px",
            flexDirection: "column",
        })}
    `;
    const ImgContainer = styled.div`
        flex: 1;
        width: 100%;
        ${iphone12Pro({
            padding: "5px",
            width: "80%",
            margin: "0 auto",
        })}
    `;
    const Image = styled.img`
        width: 100%;
        height: 90vh;
        object-fit: cover;
        ${iphone12Pro({
            width: "100%",
            height: "80%",
        })}
    `;
    const InfoContainer = styled.div`
        flex: 1;
        padding: 0px 50px;
        ${iphone12Pro({
            padding: "10px",
        })}
    `;
    const Title = styled.h1`
        font-weight: 700;
        ${iphone12Pro({
            textAlign: "center",
        })}
    `;
    const Desc = styled.p`
        margin: 20px 0px;
    `;
    const Price = styled.span`
        font-weight: 100;
        font-size: 40px;
    `;
    const FilterContainer = styled.div`
        width: 50%;
        margin: 30px 0px;
        display: flex;
        justify-content: space-between;
        ${iphone12Pro({
            width: "100%",
        })}
    `;
    const Filter = styled.div`
        display: flex;
        align-items: center;
    `;
    const FilterTitle = styled.span`
        font-size: 20px;
        font-weight: 200;
    `;
    const FilterColor = styled.div`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${props => props.color};
        margin: 0px 5px;
        cursor: pointer;
    `;
    const FilterSize = styled.select`
        margin-left: 10px;
        padding: 5px;
    `;
    const FilterSizeOption = styled.option`
          
    `;
    const AddContainer = styled.div`
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        ${iphone12Pro({
            width: "100%",
        })}
    `;
    const AmountContainer = styled.div`
        display: flex;
        align-items: center;
        font-weight: 700;
    `;
    const Amount = styled.span`
        width: 30px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid gray;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px 5px;
    `;
    const Button = styled.button`
        padding: 15px;
        border: 2px solid gray;
        background: white;
        font-weight: 500;
        cursor: pointer;
        border-radius: 10px;
        ${iphone12Pro({
            padding: "10px",
            border: "1px solid gray",
        })}

        &:hover {
            background-color: gray;
            color: white;
        }
    `;

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
              <Image src="https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </ImgContainer>
            <InfoContainer>
                <Title>Rolex Submariner</Title>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestias ad unde possimus non 
                    quisquam earum ratione voluptas, 
                    iste provident. Tenetur voluptatibus illum laboriosam aliquam fugit praesentium rem laborum hic.
                </Desc>
                <Price>$ 12,640</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="blue" />
                        <FilterColor color="green" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>1</FilterSizeOption>
                            <FilterSizeOption>2</FilterSizeOption>
                            <FilterSizeOption>3</FilterSizeOption>
                            <FilterSizeOption>4</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>Add to cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default Product
