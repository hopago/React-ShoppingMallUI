import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';
import { iphone12Pro } from '../responsive';


const Navbar = () => {

    const Container = styled.div`
        width: calc(100% - 40px);
        height: 69.5px;
        border-bottom: 0.5px solid lightgray;
        ${iphone12Pro({
          width: "100%",
          height: "49.5px"
        })}
    `;
    const Wrapper = styled.div`
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        ${iphone12Pro({
          padding: "10px 0px"
        })}
    `;
    const Left = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
    `;
    const Language = styled.span`
        font-size: 14px;
        cursor: pointer;  
        ${iphone12Pro({
          display: "none"
        })}
    `;
    const SearchContainer = styled.div`
        border: 0.5px solid lightgray;
        display: flex;
        align-items: center;
        margin-left: 20px;
        padding: 5px;
        ${iphone12Pro({
          height: "12.5px",
          marginLeft: "10px"
        })}
    `;
    const Input = styled.input`
        border: none;  
        ${iphone12Pro({
          width: "50px",
          height: "100%"
        })}
    `;
    const Center = styled.div`
        flex: 1;
        text-align: center;
    `;
    const Logo = styled.h1`
        font-size: 48px;
        font-weight: bold;
        cursor: pointer;
        ${iphone12Pro({
          fontSize: "24px",
          marginLeft: "20px",
          marginRight: "20px"
        })}
    `;
    const Right = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        ${iphone12Pro({
          justifyContent: "center",
          marginRight: "10px" 
        })}
    `;
    const MenuItem = styled.div`
        font-size: 18px;
        cursor: pointer;  
        margin-right: 20px;
        ${iphone12Pro({
          fontSize: "12px",
          marginRight: "10px"
        })}
    `;

  return (
    <Container>
        <Wrapper>
            <Left>
              <Language>KR</Language>
              <SearchContainer>
                <Input />
                <Search style={{ color: "gray", fontSize: "24px"}}/>
              </SearchContainer>
            </Left>
            <Center>
              <Logo>Hosinsa.</Logo>
            </Center>
            <Right>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Logout</MenuItem>
              <Badge badgeContent={3} color='secondary'>
                <ShoppingCartOutlined />
              </Badge>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
