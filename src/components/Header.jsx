import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format, getDate } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../context/context";
import { AuthContext } from "../context/AuthContext";

const HeaderMainContainer = styled.div`
  background-color: #003580;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 102.4rem;
  margin: ${(props) =>
    props.type !== "list" ? "2rem 0 10rem 0" : "2rem 0 0 0"};
`;
const HeaderList = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: 5rem;
`;
const HeaderListItem = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
  display: flex;
  gap: 1rem;
  align-items: center;
  border: ${(props) =>
    props.className === "active" ? "2px solid #fff" : "none"};
  padding: ${(props) => (props.className === "active" ? "10px" : "0")};
  border-radius: ${(props) => (props.className === "active" ? "5rem" : "0")};
  cursor: pointer;
`;
const StaysSpan = styled.span``;

const HeaderTitle = styled.h1``;
const HeaderDesc = styled.p`
  margin: 2rem 0;
`;
const HeaderBtn = styled.button`
  padding: 1rem 1.5rem;
  font-size: ${(props) =>
    props.className === "serachItembtn" ? "1.3rem" : "1.5rem"};
  border-radius: ${(props) =>
    props.className === "serachItembtn" ? "5px" : "0"};

  color: #fff;
  cursor: pointer;
  background-color: #0071c2;
  border: none;
`;

const HeaderSearch = styled.div`
  height: 5rem;
  background-color: #fff;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  border-radius: 5px;
  position: absolute;
  bottom: -2.5rem;
  width: 100%;
  max-width: 102.4rem;
  font-size: 1.4rem;
`;
const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;
const HeaderSearchInput = styled.input`
  border: none;
  outline: none;
`;
const HeaderSearchText = styled.span`
  color: #bababa;
  cursor: pointer;
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #bababa;
  font-size: 1.7rem;
`;

const Daterange = styled(DateRange)`
  position: absolute;
  top: 4rem;
  z-index: 2;
`;

const Options = styled.div`
  position: absolute;
  top: 3.3rem;
  background-color: #fff;
  /* outline: 1px solid blue; */
  border-radius: 3px;
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  padding: 1rem;
  width: 20rem;
  z-index: 2;
`;
const OptionItems = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
`;
const OptionCounter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const OptionText = styled.span`
  flex: 1;
`;
const OptionCounterBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #0071c2;
  color: #0071c2;
  cursor: pointer;
  background-color: white;

  &:disabled {
    cursor: not-allowed;
  }
`;
const OptionCounterNumber = styled.span``;

const Header = (props) => {
  const [destination, setDestination] = useState("");
  const [opendate, setOpenDate] = useState(false);
  const [openCount, setOpenCount] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      key: "selection",
    },
  ]);

  const [bookingCount, setBookingCount] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const optionCounterBtn = (name, operation) => {
    // setBookingCount((prev) => {
    //   return {
    // ...prev,
    // [name]:
    //   operation === "i" ? bookingCount[name] + 1 : bookingCount[name] - 1,
    //   };
    // });

    setBookingCount({
      ...bookingCount,
      [name]:
        operation === "i" ? bookingCount[name] + 1 : bookingCount[name] - 1,
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({
      type: "NEW_SEARCH",
      payload: { destination, dates, bookingCount },
    });
    navigate("/hotels", { state: { destination, dates, bookingCount } });
  };

  const { user } = useContext(AuthContext);

  return (
    <HeaderMainContainer>
      <HeaderContainer type={props.type}>
        <HeaderList>
          <HeaderListItem className="active">
            <FontAwesomeIcon icon={faBed} />
            <StaysSpan>Stays</StaysSpan>
          </HeaderListItem>

          <HeaderListItem>
            <FontAwesomeIcon icon={faPlane} />
            <StaysSpan>Flights</StaysSpan>
          </HeaderListItem>

          <HeaderListItem>
            <FontAwesomeIcon icon={faCar} />
            <StaysSpan>Car rentals</StaysSpan>
          </HeaderListItem>

          <HeaderListItem>
            <FontAwesomeIcon icon={faBed} />
            <StaysSpan>Attractions</StaysSpan>
          </HeaderListItem>

          <HeaderListItem>
            <FontAwesomeIcon icon={faTaxi} />
            <StaysSpan>Airport taxis</StaysSpan>
          </HeaderListItem>
        </HeaderList>
        {props.type !== "list" && (
          <>
            <HeaderTitle>A lifetime of discount? It's Genius</HeaderTitle>
            <HeaderDesc>
              Get rewarded for your travels - unlock saving of 10% or more with
              a free bookingApp account
            </HeaderDesc>
            {!user && <HeaderBtn>Sign up / Register</HeaderBtn>}
            <HeaderSearch>
              <HeaderSearchItem>
                <StyledFontAwesomeIcon icon={faBed} className="headerIcon" />
                <HeaderSearchInput
                  type="text"
                  placeholder="where are you going?"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </HeaderSearchItem>

              <HeaderSearchItem>
                <StyledFontAwesomeIcon
                  icon={faCalendarDays}
                  className="headerIcon"
                />
                <HeaderSearchText onClick={() => setOpenDate(!opendate)}>
                  {format(dates[0].startDate, "dd/MM/yyyy")} to{" "}
                  {format(dates[0].endDate, "dd/MM/yyyy")}
                </HeaderSearchText>
                {opendate && (
                  <Daterange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    minDate={new Date()}
                  />
                )}
              </HeaderSearchItem>

              <HeaderSearchItem>
                <StyledFontAwesomeIcon icon={faPerson} className="headerIcon" />
                <HeaderSearchText onClick={() => setOpenCount(!openCount)}>
                  {`${bookingCount.adult} adult . ${bookingCount.children} children . ${bookingCount.room} room`}
                </HeaderSearchText>
                {openCount && (
                  <Options>
                    <OptionItems>
                      <OptionText>Adult</OptionText>
                      <OptionCounter>
                        <OptionCounterBtn
                          onClick={() => optionCounterBtn("adult", "d")}
                          disabled={bookingCount.adult <= 1}
                        >
                          -
                        </OptionCounterBtn>
                        <OptionCounterNumber>
                          {bookingCount.adult}
                        </OptionCounterNumber>
                        <OptionCounterBtn
                          onClick={() => optionCounterBtn("adult", "i")}
                        >
                          +
                        </OptionCounterBtn>
                      </OptionCounter>
                    </OptionItems>
                    <OptionItems>
                      <OptionText>Children</OptionText>
                      <OptionCounter>
                        <OptionCounterBtn
                          onClick={() => optionCounterBtn("children", "d")}
                          disabled={bookingCount.children <= 0}
                        >
                          -
                        </OptionCounterBtn>
                        <OptionCounterNumber>
                          {bookingCount.children}
                        </OptionCounterNumber>
                        <OptionCounterBtn
                          onClick={() => optionCounterBtn("children", "i")}
                        >
                          +
                        </OptionCounterBtn>
                      </OptionCounter>
                    </OptionItems>
                    <OptionItems>
                      <OptionText>Room</OptionText>
                      <OptionCounter>
                        <OptionCounterBtn
                          onClick={() => optionCounterBtn("room", "d")}
                          disabled={bookingCount.room <= 1}
                        >
                          -
                        </OptionCounterBtn>
                        <OptionCounterNumber>
                          {bookingCount.room}
                        </OptionCounterNumber>
                        <OptionCounterBtn
                          onClick={() => optionCounterBtn("room", "i")}
                        >
                          +
                        </OptionCounterBtn>
                      </OptionCounter>
                    </OptionItems>
                  </Options>
                )}
              </HeaderSearchItem>

              <HeaderSearchItem>
                <HeaderBtn className="serachItembtn" onClick={handleSearch}>
                  Search
                </HeaderBtn>
              </HeaderSearchItem>
            </HeaderSearch>
          </>
        )}
      </HeaderContainer>
    </HeaderMainContainer>
  );
};

export default Header;
