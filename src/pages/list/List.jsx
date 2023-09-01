import styled from "styled-components";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/SearchItem";
import useFetch from "../../hooks/useFetch.js";

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
const ListWraper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 2rem;
`;
const ListSearch = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 1rem;
  border-radius: 1rem;
  position: sticky;
  top: 10px;
  height: max-content;
`;

const H1 = styled.h1`
  font-size: 2rem;
  color: #555;
  margin-bottom: 1rem;
`;
const ListResult = styled.div`
  flex: 3;
`;

const LsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 1rem;
`;
const Label = styled.label`
  font-size: 1.3rem;
`;
const Input = styled.input`
  height: 3.5rem;
  border: none;
  padding: 5px;
  font-size: 1.5rem;
`;

const Span = styled.span`
  height: 3.5rem;
  padding: 5px;
  background-color: white;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

const Daterange = styled(DateRange)`
  /* position: absolute; */
  /* top: 4rem; */
  z-index: 2;
`;
const LsOptions = styled.div`
  padding: 1rem;
`;

const LsOptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.7rem;
  color: #555;
  font-size: 12px;
`;
const LsOptionText = styled.span``;
const LsInput = styled.input`
  width: 5rem;
`;

const SubmitBtn = styled.button`
  width: 100%;
  background-color: #0071c2;
  color: white;
  border: none;
  padding: 1rem;
  font-weight: 500;
  cursor: pointer;
`;

const List = () => {
  const location = useLocation();
  const [opendate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [bookingCount, setBookingCount] = useState(location.state.bookingCount);

  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `https://bookingappbackend-hiaw.onrender.com/hotels?city=${destination}&min=${min || 0}&max=${
      max || 9999
    }`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <>
      <NavBar />
      <Header type="list" />
      <ListContainer>
        <ListWraper>
          <ListSearch>
            <H1>Search</H1>

            <LsItem>
              <Label>Destination</Label>
              <Input
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </LsItem>

            <LsItem>
              <Label>Check-in Date : </Label>
              <Span onClick={() => setOpenDate(!opendate)}>
                {format(dates[0].startDate, "dd/MM/yyyy")} to{" "}
                {format(dates[0].endDate, "dd/MM/yyyy")}
              </Span>

              {opendate && (
                <Daterange
                  editableDateInputs={true}
                  onChange={(item) => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  minDate={new Date()}
                />
              )}
            </LsItem>

            <LsItem>
              <Label>Options</Label>
              <LsOptions>
                <LsOptionItem>
                  <LsOptionText>
                    Min price <small> per night </small>
                  </LsOptionText>
                  <LsInput
                    type="number"
                    className="numInput"
                    onChange={(e) => setMin(e.target.value)}
                  />
                </LsOptionItem>

                <LsOptionItem>
                  <LsOptionText>
                    Max price <small> per night </small>
                  </LsOptionText>
                  <LsInput
                    type="number"
                    className="numInput"
                    onChange={(e) => setMax(e.target.value)}
                  />
                </LsOptionItem>

                <LsOptionItem>
                  <LsOptionText>Adult</LsOptionText>
                  <LsInput
                    type="number"
                    min={1}
                    className="numInput"
                    placeholder={bookingCount.adult}
                  />
                </LsOptionItem>

                <LsOptionItem>
                  <LsOptionText>Children</LsOptionText>
                  <LsInput
                    type="number"
                    min={0}
                    className="numInput"
                    placeholder={bookingCount.children}
                  />
                </LsOptionItem>

                <LsOptionItem>
                  <LsOptionText>Room</LsOptionText>
                  <LsInput
                    type="number"
                    min={1}
                    className="numInput"
                    placeholder={bookingCount.room}
                  />
                </LsOptionItem>
                <SubmitBtn onClick={handleClick}>Search</SubmitBtn>
              </LsOptions>
            </LsItem>
          </ListSearch>
          <ListResult>
            {loading ? (
              "loading ..."
            ) : (
              <>
                {data &&
                  data.map((item) => <SearchItem key={item._id} item={item} />)}
              </>
            )}
          </ListResult>
        </ListWraper>
      </ListContainer>
    </>
  );
};

export default List;
