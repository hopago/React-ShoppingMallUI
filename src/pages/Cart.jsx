import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { iphone12Pro } from '../responsive';


const Cart = () => {

    const Container = styled.div`
        padding: 20px;
        ${iphone12Pro({
          padding: "10px",
        })}
    `;
    const Wrapper = styled.div`

    `;
    const Title = styled.h1`
        font-weight: 300;
        text-align: center;
        margin-top: 20px;
        ${iphone12Pro({
          fontSize: "32px",
        })}
    `;
    const Top = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        ${iphone12Pro({
          padding: "5px",
        })}
    `;
    const TopButton = styled.button`
        padding: 10px;
        font-weight: 600;
        cursor: pointer;
        border: ${props => props.type === "filled" && "none"};
        border-radius: 10px;
        background-color: ${props => props.type === "filled" ? "black" : "transparent"};
        color: ${props => props.type === "filled" && "white"};
        ${iphone12Pro({
          padding: "5px",
          fontWeight: "300",
        })}
    `;
    const TopTexts = styled.div`
      
    `;
    const TopText = styled.span`
        text-decoration: underline;
        cursor: pointer;
        margin: 0px 10px;
    `;
    const Bottom = styled.div`
        display: flex;
        justify-content: space-between;
        ${iphone12Pro({
          flexDirection: "column",
        })}
    `;
    const Info = styled.div`
        flex: 3;
    `;
    const Product = styled.div`
        display: flex;
        justify-content: space-between;
        ${iphone12Pro({
          justifyContent: "space-between",
        })}
    `;
    const ProductDetail = styled.div`
        flex: 2;
        display: flex;
        ${iphone12Pro({
          flexDirection: "column",
        })}
    `;
    const Image = styled.img`
        width: 300px;
        height: 210px;
        object-fit: contain;
        ${iphone12Pro({
          width: "150px",
          height: "105px",
          objectFit: "cover",
          alignSelf: "center",
        })}
    `;
    const Details = styled.div`
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        ${iphone12Pro({
          padding: "10px",
        })}
    `;
    const ProductName = styled.span`
        ${iphone12Pro({
          marginBottom: "10px"
        })}
    `;
    const ProductId = styled.span`
        ${iphone12Pro({
          marginBottom: "10px"
        })}
    `;
    const ColorTag = styled.span`
        font-weight: bold;
        ${iphone12Pro({
          marginBottom: "5px"
        })}
    `;
    const ProductColor = styled.div`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${props => props.color};
        cursor: pointer;
        ${iphone12Pro({
          marginBottom: "10px"
        })}
    `;
    const ProductSize = styled.span`

    `;
    const PriceDetail = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;
    const ProductAmountContainer = styled.div`
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        border: 1px solid gray;
        border-radius: 10px;
        padding: 5px;
    `
    const ProductAmount = styled.div`
        font-size: 24px;
        margin: 5px;
    `
    const ProductPrice = styled.div`
        font-size: 30px;
        font-weight: 200;
    `;
    const Hr = styled.hr`
        background-color: lightgray;
        border: none;
        height: 1px;
        width: 90%;
        margin: 0 auto;
        margin-top: 20px;
        ${iphone12Pro({
          display: "none",
        })}
    `;
    const Summary = styled.div`
        flex: 1;
        border: 0.5px solid lightgray;
        border-radius: 10px;
        padding: 20px;
        height: 40vh;
    `;
    const SummaryTitle = styled.h1`
        font-weight: 200;
    `;
    const SummaryItem = styled.div`
        margin: 30px 0px;
        display: flex;
        justify-content: space-between;
        font-weight: ${props => props.type === "total" && "500"};
        font-size: ${props => props.type === "total" && "28px"};
    `;
    const SummaryItemText = styled.span`
        
    `;
    const SummaryItemPrice = styled.span`
        
    `;
    const SummaryButton = styled.button`
        width: 100%;
        padding: 10px;
        background-color: black;
        color: white;
        border-radius: 10px;
        font-weight: 600;
        cursor: pointer;
    `;

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Title>My List</Title>
          <Top>
            <TopButton>Continue</TopButton>
            <TopTexts>
              <TopText>Cart List(2)</TopText>
              <TopText>Wish List(4)</TopText>
            </TopTexts>
            <TopButton type="filled">Buy now</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <Image src="https://images.pexels.com/photos/2095953/pexels-photo-2095953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <ProductDetail>
                  <Details>
                    <ProductName><b>Product:</b> Gentle Monster</ProductName>
                    <ProductId><b>Id:</b> 07121999</ProductId>
                    <ColorTag>Color</ColorTag>
                    <ProductColor color="black" />
                    <ProductSize><b>Size:</b> Regular</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>1</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 100</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
            </Info>
            <Summary>
              <SummaryTitle>Summary</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 100</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 8</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Discount</SummaryItemText>
                <SummaryItemPrice>$ 10</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ 82</SummaryItemPrice>
              </SummaryItem>
              <SummaryButton>Check Out</SummaryButton>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart
