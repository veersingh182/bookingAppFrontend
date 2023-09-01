import styled from "styled-components";

const Fp_Item = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Img = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
`;
const FpName = styled.span`
  font-weight: 800;
  font-size: 1.6rem;
`;
const FpCity = styled.span`
  font-weight: 300;
  font-size: 1.4rem;
`;
const FpPrice = styled.span`
  font-weight: 600;
  font-size: 1.5rem;
`;
const FpRating = styled.div``;
const Button = styled.button`
  background-color: #003580;
  color: white;
  border: none;
  padding: 3px;
  margin-right: 1rem;
  font-weight: 700;
`;
const Span = styled.span`
  font-size: 1.4rem;
`;

const FpItem = (props) => {
  return (
    <Fp_Item>
      <Img src={props.item.photos[0] || "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"} alt="" />
      <FpName>{props.item.name}</FpName>
      <FpCity>{props.item.city}</FpCity>
      <FpPrice> Starting from ${props.item.CheapestPrice}</FpPrice>
      {props.item.raiting && (
        <FpRating>
          <Button>{props.item.rating}</Button>
          <Span>{props.comment}</Span>
        </FpRating>
      )}
    </Fp_Item>
  );
};

export default FpItem;
