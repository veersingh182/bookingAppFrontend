import { useContext, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  & > span {
    font-size: 1.4rem;
    margin: 1rem 0;
    color: red;
  }
`;
const LInput = styled.input`
  width: 25rem;
  height: 4rem;
  padding: 1rem;
  margin-bottom: 2rem;
`;
const LButton = styled.button`
  padding: 1rem 5rem;
  cursor: pointer;
`;

const Login_fn = () => {
  const [credentials, setCredentails] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const nevigate = useNavigate();

  const handleChange = (e) => {
    setCredentails((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://bookingappbackend-hiaw.onrender.com/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      nevigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

  return (
    <Login>
      <LContainer>
        <LInput
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
        />

        <LInput
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <LButton onClick={handleLogin}>Login</LButton>

        {error && <span>{error.message}</span>}
      </LContainer>
    </Login>
  );
};

export default Login_fn;
