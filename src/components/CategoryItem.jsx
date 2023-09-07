import styled from 'styled-components';


const CategoryItem = ({ data }) => {

    const Container = styled.div`
        flex: 1;
        margin: 5px;
        height: 70vh;
        position: relative;
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
    `;
    const Image = styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    `;
    const Info = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;
    const Title = styled.h1`
        font-size: 48px;
        color: white;
        margin-bottom: 20px;
        border: 3px solid white;
        border-radius: 10px;
        padding: 10px;
        font-weight: 800;
    `;
    const Button = styled.button`
        border: none;
        padding: 10px;
        background-color: white;
        color: gray;
        cursor: pointer;
        font-weight: 600;
        border-radius: 10px;
    `;

  return (
    <Container>
        <Image src={data.img} />
        <Info>
            <Title>{data.title}</Title>
            <Button>BUY NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem
