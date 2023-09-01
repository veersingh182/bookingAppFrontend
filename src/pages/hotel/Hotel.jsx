import styled from "styled-components";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/MailList";
import Footer from "../../components/Footer";
import { useState, useContext } from "react";
import useFetch from "../../hooks/useFetch.js";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/context";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/Reserve";

const HotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 2rem;
`;
const HotelWrapper = styled.div`
  width: 100%;
  max-width: 102.4rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  & > .bookNow {
    position: absolute;
    right: 0;
    top: 10px;
    border: none;
    padding: 1rem 2rem;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }

  & > .hotelDistance {
    color: #0071c2;
    font-weight: 600;
  }
  & > .hetelPriceHighlight {
    color: #008009;
    font-weight: 600;
  }
`;
const HotelTittle = styled.h1`
  font-size: 24px;
`;
const HotelAddress = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const HotelImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* gap: 0 5px; */
  justify-content: space-between;
`;
const HotelImageWrapper = styled.div`
  width: 33%;

  & > img {
    width: 100%;
    object-fit: cover;
  }
`;
const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2rem;
`;
const HotelDetailsTexts = styled.div`
  flex: 3;
  & > h1 {
    font-size: 3.4rem;
  }

  & > .hotelDesc {
    font-size: 1.4rem;
    margin-top: 2rem;
  }
`;
const HotelDetailsPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > h1 {
    font-size: 1.8rem;
    color: #555;
  }

  & > span {
    font-size: 1.4rem;
  }
  & > h2 {
    font-size: 2rem;
    /* color: #555; */
    font-weight: 300;
  }

  & > button {
    border: none;
    background-color: #0071c2;
    color: white;
    padding: 1rem 2rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
  }
`;

const Footer_div = styled.div`
  width: 100%;
  max-width: 102.4rem;
  display: flex;
  align-items: center;
  border: 2px solid blue;
`;
const Slider = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.426);
  z-index: 999;
  display: flex;
  align-items: center;
  /* border: 2px solid red; */
  /* position: relative; */

  & > .close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 3rem;
    color: lightgrey;
    cursor: pointer;
  }

  & .arrow {
    margin: 2rem;
    font-size: 5rem;
    color: lightgray;
    cursor: pointer;
  }
`;
const SliderImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > .sliderImg {
    width: 90%;
    height: 75vh;
    object-fit: cover;
  }
`;

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [slideOpen, setSlideOpen] = useState(false);
  const [bookingModelOpen, setBookingModelOpen] = useState(false);
  const location = useLocation();

  const hotelId = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(
    `https://bookingappbackend-hiaw.onrender.com/hotels/find/${hotelId}`
  );

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // const data.photos = [
  //   {
  //     src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/240127241.jpg?k=10b157669ce2ff9fe2ab2958e3656e6a7a9f941522ffcde328dd3e45ea6675ff&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/302748009.jpg?k=a31814b593deb3472f1d554bb6706bbc13761722ac8d836ddf119114ddeaa2e4&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/240127361.jpg?k=8f42da40f3fb33afdcd14a1e8e6d008106e12c84f90e45367849cc121f625c61&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/240127263.jpg?k=cc510409377646f8f5821ee52f26be6df9626fc838fbc7c2f77ca66913277eb5&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/302748015.jpg?k=2a6c60d9b1f19d82b2d1b17a2a6e6a13edb30020869c5abb5cbdae0fa6dee28b&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/240127332.jpg?k=50a1b207c246ffdcbc6b08c259b8d341a4e79424dc8180473e320c8d0aa5140b&o=&hp=1",
  //   },
  // ];

  const { dates, bookingCount, destination } = useContext(SearchContext);
  const MILLISEC_PER_DAY = 24 * 60 * 60 * 1000;
  const DayDiff = (date1, date2) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const dayDiff = Math.ceil(timeDiff / MILLISEC_PER_DAY);
    return dayDiff;
  };

  const Days = DayDiff(dates[0].endDate, dates[0].startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setSlideOpen(true);
  };

  const handleArrow = (dir) => {
    const n = data.photos.length;

    if (dir === "l") {
      if (slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
      } else {
        setSlideNumber(n - 1);
      }
    } else {
      if (slideNumber < n - 1) {
        setSlideNumber(slideNumber + 1);
      } else setSlideNumber(0);
    }
  };

  const handleBookClick = () => {
    if (user) {
      setBookingModelOpen(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <NavBar />
      <Header type="list" />
      <HotelContainer>
        {loading ? (
          "loading... "
        ) : (
          <>
            {slideOpen && (
              <Slider>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  onClick={() => setSlideOpen(false)}
                  className="close"
                />
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  className="arrow"
                  onClick={() => handleArrow("l")}
                />
                <SliderImgWrapper>
                  <img
                    src={data.photos[slideNumber]}
                    alt=""
                    className="sliderImg"
                  />
                </SliderImgWrapper>
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="arrow"
                  onClick={() => handleArrow("r")}
                />
              </Slider>
            )}
            <HotelWrapper>
              <button className="bookNow" onClick={handleBookClick}>
                Reserve or Book Now!
              </button>
              <HotelTittle>{data.name}</HotelTittle>
              <HotelAddress>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{data.address}</span>
              </HotelAddress>
              <span className="hotelDistance">
                Excellent location - {data.distance}m from center
              </span>
              <span className="hetelPriceHighlight">
                Book a stay over ${data.CheapestPrice} at this property and get
                a free airport texi.
              </span>

              <HotelImages>
                {data.photos?.map((photo, index) => (
                  <HotelImageWrapper>
                    <img src={photo} onClick={() => handleOpen(index)} alt="" />
                  </HotelImageWrapper>
                ))}
              </HotelImages>
              <HotelDetails>
                <HotelDetailsTexts>
                  <h1 className="hotelTitle">{data.title}</h1>
                  <p className="hotelDesc">{data.desc}</p>
                </HotelDetailsTexts>
                <HotelDetailsPrice>
                  <h1>perfect for {Days}-night stay!</h1>
                  <span>
                    location in the real heart of {destination}, this property
                    has an excellent location score of 9.6!
                  </span>
                  <h2>
                    <b>${Days * bookingCount.room * data.CheapestPrice}</b> (
                    {Days} nights)
                  </h2>
                  <button onClick={handleBookClick}>
                    Reservev or Book Now!
                  </button>
                </HotelDetailsPrice>
              </HotelDetails>
            </HotelWrapper>
          </>
        )}
        <MailList />
        <Footer />
      </HotelContainer>

      {bookingModelOpen && (
        <Reserve setBookingModelOpen={setBookingModelOpen} hotelId={hotelId} />
      )}
    </>
  );
};

export default Hotel;
