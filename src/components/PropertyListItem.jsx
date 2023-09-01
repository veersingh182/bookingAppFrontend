import styled from "styled-components";
const P_ListItem = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  flex: 1;
`;
const P_ListTitels = styled.div``;
const Img = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
`;
const H1 = styled.h1`
  font-size: 18px;
  text-transform: capitalize;
`;
const H2 = styled.h2`
  font-size: 14px;
  font-weight: 300;
`;

const PropertyListItem = (props) => {
  return (
    <P_ListItem>
      <Img src={props.SRC} alt="" />
      <P_ListTitels>
        <H1>{props.ItemName}</H1>
        <H2>
          {props.ItemValue} {props.ItemName}
        </H2>
      </P_ListTitels>
    </P_ListItem>
  );
};

export default PropertyListItem;
