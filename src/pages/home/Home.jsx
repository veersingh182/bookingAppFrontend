import React from "react";
import styled from "styled-components";
import Featured from "../../components/Featured";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import PropertyList from "../../components/PropertyList";
import FeaturedProperties from "../../components/FeaturedProperties";
import MailList from "../../components/MailList";
import Footer from "../../components/Footer";

const HomeContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
`;

const H1 = styled.h1`
  width: 1024px;
  font-size: 2rem;
`;
const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <HomeContainer>
        <Featured />
        <H1>Browse by property type</H1>
        <PropertyList />
        <H1> Homes guests love</H1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </HomeContainer>
    </>
  );
};

export default Home;
