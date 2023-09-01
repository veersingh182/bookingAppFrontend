import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const Navbar = styled.div`
  height: 5rem;
  background-color: #003580;
  display: flex;
  justify-content: center;
`;
const NavContainer = styled.div`
  width: 100%;
  max-width: 102.4rem;
  /* background-color: red; */
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span.username {
    color: #fff;
    border: 3px solid red;
  }
`;
const Logo = styled.span`
  font-weight: 500;
`;
const NavItems = styled.div``;
const NavButton = styled.button`
  margin-left: 1.3rem;
  padding: 6px 13px;
  border: none;
  font-size: 1.4rem;
  color: #003580;
`;

const NavBar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
  };

  return (
    <Navbar>
      <NavContainer>
        <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
          <Logo>BookingApp</Logo>
        </Link>
        {user ? (
          <div>
            <span className="username">{user.username}</span>
            <NavButton onClick={handleLogout}>Logout</NavButton>
          </div>
        ) : (
          <NavItems>
            <NavButton>Register</NavButton>
            <Link to={"/login"}>
              <NavButton>Login</NavButton>
            </Link>
          </NavItems>
        )}
      </NavContainer>
    </Navbar>
  );
};

export default NavBar;
