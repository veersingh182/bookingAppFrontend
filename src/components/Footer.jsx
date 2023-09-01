import styled from "styled-components";

const FooterDiv = styled.div`
  width: 100%;
  max-width: 102.4rem;
  font-size: 14px;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;
const FLists = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-between;
`;
const FList = styled.ul`
  list-style: none;
  padding: 0;
`;
const FListItem = styled.li`
  margin-bottom: 1rem;
  color: #003580;
  cursor: pointer;
`;
const FText = styled.div``;

const Footer = () => {
  return (
    <FooterDiv>
      <FLists>
        <FList>
          <FListItem>Countries</FListItem>
          <FListItem>Regions</FListItem>
          <FListItem>Cities</FListItem>
          <FListItem>Districts</FListItem>
          <FListItem>Airports</FListItem>
          <FListItem>Hotels</FListItem>
        </FList>
        <FList>
          <FListItem>Countries</FListItem>
          <FListItem>Regions</FListItem>
          <FListItem>Cities</FListItem>
          <FListItem>Districts</FListItem>
          <FListItem>Airports</FListItem>
          <FListItem>Hotels</FListItem>
        </FList>

        <FList>
          <FListItem>Countries</FListItem>
          <FListItem>Regions</FListItem>
          <FListItem>Cities</FListItem>
          <FListItem>Districts</FListItem>
          <FListItem>Airports</FListItem>
          <FListItem>Hotels</FListItem>
        </FList>

        <FList>
          <FListItem>Countries</FListItem>
          <FListItem>Regions</FListItem>
          <FListItem>Cities</FListItem>
          <FListItem>Districts</FListItem>
          <FListItem>Airports</FListItem>
          <FListItem>Hotels</FListItem>
        </FList>
      </FLists>
      <FText>Copyright &#169; 2022 BookingApp.</FText>
    </FooterDiv>
  );
};

export default Footer;
