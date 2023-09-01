import styled from "styled-components";
import PropertyListItem from "./PropertyListItem";
import useFetch from "../hooks/useFetch";

const P_List = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const PropertyList = () => {
  const { data, loading, error, reFetch } = useFetch(
    "https://bookingappbackend-hiaw.onrender.com/hotels/countByType"
  );

  const Images = [
    "https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1",

    "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=",

    "https://cf.bstatic.com/xdata/images/hotel/square600/154543781.webp?k=ad89bc70ec138736b22947f52b7e0ecbac176026e13c50646147303582d94bcd&o=&s=1",

    "https://cf.bstatic.com/xdata/images/xphoto/700x350/208414174.webp?k=171ab28fde6f2b6ab41b59a40daedf415c925454ecf9d398c88ca4e1977e7e31&o=",

    "https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=",
  ];

  // console.log(data[0]);
  return (
    <P_List>
      {loading ? (
        "loading please wait ... "
      ) : (
        <>
          {data &&
            Images.map((img, i) => (
              <PropertyListItem
                key={i}
                ItemName={data[i]?.type}
                ItemValue={data[i]?.count}
                SRC={img}
              />
            ))}
        </>
      )}
    </P_List>
  );
};

export default PropertyList;
