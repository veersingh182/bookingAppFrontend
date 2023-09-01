import styled from "styled-components";
import useFetch from "../hooks/useFetch";

const FeaturedDiv = styled.div`
  width: 100%;
  max-width: 102.4rem;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  z-index: 1;
`;
const FeaturedItem = styled.div`
  position: relative;
  color: floralwhite;
  border-radius: 1rem;
  overflow: hidden;
  height: 25rem;
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
const FeaturedTitles = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0rem;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 1rem;
`;
const H1 = styled.h1`
  color: #ffffff;
  font-size: 32px;
`;
const H2 = styled.h2`
  font-size: 24px;
`;

const Featured = () => {
  const { data, loading, error } = useFetch(
    `https://bookingappbackend-hiaw.onrender.com/hotels/countByCity?cities=alwar,delhi,jaipur`
  );

  return (
    <FeaturedDiv>
      {loading ? (
        "loading please wait....."
      ) : (
        <>
          <FeaturedItem>
            <Img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
              alt=""
            />
            <FeaturedTitles>
              <H1>Alwar</H1>
              <H2>{data[0]} preoperties</H2>
            </FeaturedTitles>
          </FeaturedItem>

          <FeaturedItem>
            <Img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
              alt=""
            />
            <FeaturedTitles>
              <H1>Delhi</H1>
              <H2>{data[1]} preoperties</H2>
            </FeaturedTitles>
          </FeaturedItem>

          <FeaturedItem>
            <Img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1"
              alt=""
            />
            <FeaturedTitles>
              <H1>Jaipur</H1>
              <H2>{data[2]} preoperties</H2>
            </FeaturedTitles>
          </FeaturedItem>
        </>
      )}
    </FeaturedDiv>
  );
};

export default Featured;
