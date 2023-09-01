import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { useContext } from "react";
import { SearchContext } from "../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve_ = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000085;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  overflow: scroll;
`;
const R_Container = styled.div`
  background-color: #fff;
  padding: 2rem;
  /* width: fit-content; */
  height: fit-content;
  position: relative;
  & > .rClose {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    font-size: 2.3rem;
    color: #717070;
  }
`;
const R_Item = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  padding: 2rem;
  /* font-size: 2rem; */
`;
const R_Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const R_Title = styled.div`
  font-weight: 600;
  text-transform: capitalize;
  font-size: 1.7rem;
`;
const R_Desc = styled.div`
  font-weight: 300;
  text-transform: capitalize;
  font-size: 1.5rem;
`;
const R_Max = styled.div`
  text-transform: capitalize;
  font-size: 1.3rem;
`;
const R_Price = styled.div`
  /* font-weight: 600; */
  font-size: 1.6rem;
`;
const SelectRooms = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  font-size: 1rem;
  color: #575757;
`;
const Room = styled.div`
  display: flex;
  flex-direction: column;
`;
const R_Button = styled.button`
  border: none;
  padding: 1rem 2rem;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  margin-top: 2rem;
`;

const Reserve = ({ setBookingModelOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);

  const { data, loading, error } = useFetch(
    `https://bookingappbackend-hiaw.onrender.com/hotels/room/${hotelId}`
  );

  const navigate = useNavigate();

  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const date = new Date(startDate.getTime());

    let list = [];

    while (date <= endDate) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return list;
  };

  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleRoomSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(
            `https://bookingappbackend-hiaw.onrender.com/rooms/availability/${roomId}`,
            { dates: allDates }
          );
          return res.data;
        })
      );
      setBookingModelOpen(false);
      alert("slected rooms are booked!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Reserve_>
      <R_Container>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setBookingModelOpen(false)}
        />
        <span>Select your Rooms:</span>
        {data.map((item) => (
          <R_Item>
            <R_Info>
              <R_Title>{item.title}</R_Title>
              <R_Desc>{item.desc}</R_Desc>
              <R_Max>
                Max People: <b>{item.maxPeople}</b>
              </R_Max>
              <R_Price>
                Price : <b>{item.price}</b>
              </R_Price>
            </R_Info>
            <SelectRooms>
              {item.roomNumber.map((roomNumber) => (
                <Room>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleRoomSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </Room>
              ))}
            </SelectRooms>
          </R_Item>
        ))}
        <R_Button onClick={handleClick}>Reserve now!</R_Button>
      </R_Container>
    </Reserve_>
  );
};

export default Reserve;
