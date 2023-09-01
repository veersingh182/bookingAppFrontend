import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Search_Item = styled.div`
  border: 1px solid lightgray;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
`;
const IMG = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: cover;
`;

const SearchDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 2;
`;
const SiTitle = styled.h1`
  font-size: 2rem;
  color: #0071c2;
`;
const SiDistance = styled.span`
  font-size: 1.2rem;
`;
const SiTaxiOption = styled.span`
  font-size: 1.2rem;
  background-color: #008009;
  color: white;
  width: max-content;
  padding: 3px;
  border-radius: 5px;
`;
const SiSubtitle = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;
const SiFeatures = styled.span`
  font-size: 12px;
`;
const SiCancelOp = styled.span`
  font-size: 12px;
  color: #008009;
  font-weight: bold;
`;
const SiCancelOpSubtitle = styled.span`
  font-size: 12px;
  color: #008009;
`;

const SearchDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SiRating = styled.div`
  display: flex;
  justify-content: space-between;
  & > span {
    font-weight: bold;
  }
  & > button {
    background-color: #003580;
    color: white;
    padding: 5px;
    font-weight: bold;
    border: none;
  }
`;
const SiDetailTexts = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const SiPrice = styled.span`
  font-size: 2.4rem;
`;
const SiTaxOp = styled.span`
  font-size: 1.2rem;
  color: grey;
`;
const SiCheckButton = styled.button`
  background-color: #0071c2;
  color: white;
  padding: 10px 5px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const SearchItem = (props) => {
  return (
    <Search_Item>
      <IMG src={props.item.photos[0]} />

      <SearchDesc>
        <SiTitle>{props.item.name}</SiTitle>
        <SiDistance>{props.item.distance}m from center</SiDistance>
        <SiTaxiOption>Free airport taxi</SiTaxiOption>
        <SiSubtitle>Studio Apartmrent with Air conditioning</SiSubtitle>
        <SiFeatures>{props.item.desc}</SiFeatures>
        <SiCancelOp>Free cancellation</SiCancelOp>
        <SiCancelOpSubtitle>
          You can cancel later, so look in this great price today!
        </SiCancelOpSubtitle>
      </SearchDesc>

      <SearchDetails>
        {props.item.raiting && (
          <SiRating>
            <span>Excellent</span>
            <button>{props.item.rating}</button>
          </SiRating>
        )}
        <SiDetailTexts>
          <SiPrice>${props.item.CheapestPrice}</SiPrice>
          <SiTaxOp>Including all Taxes and fees</SiTaxOp>
          <Link to={`/hotels/${props.item._id}`}>
            <SiCheckButton>See availability</SiCheckButton>
          </Link>
        </SiDetailTexts>
      </SearchDetails>
    </Search_Item>
  );
};

export default SearchItem;
