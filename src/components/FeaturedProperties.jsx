import styled from "styled-components";
import FpItem from "./FpItem";
import useFetch from "../hooks/useFetch";

const Fp = styled.div`
  width: 100%;
  max-width: 102.4rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const FeaturedProperties = () => {
  const { data, loading, error, reFetch } = useFetch(
    "https://bookingappbackend-hiaw.onrender.com/hotels?Featured=true&limit=3"
  );
  const Image = [
    "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
  ];
  return (
    <Fp>
      {loading ? (
        "looding please wait..."
      ) : (
        <>
          {data &&
            data.map((item) => (
              <FpItem item={item} key={item._id} comment="Excellent" />
            ))}
        </>
      )}
    </Fp>
  );
};

export default FeaturedProperties;
