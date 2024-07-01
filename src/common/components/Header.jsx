import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { sessionStatus, userdata } from "../../App/selectors";
import { useDispatch, useSelector } from "react-redux";
import { sessionTokenReset } from "../../features/SignIn/sessionSlice";
import { useEffect } from "react";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const status = useSelector(sessionStatus);
  const user = useSelector(userdata);

  const dispatch = useDispatch();
  const resetSession = () => {
    dispatch(sessionTokenReset());
  };

  return (
    <StyledNav>
      <Link to="/">
        <img src={logo} alt="Logo Argent Bank" style={{ width: "200px" }}></img>
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {status !== "success" && (
        <div>
          <StyledLink to="/signin">
            <FontAwesomeIcon
              icon={faCircleUser}
              style={{ marginRight: "5px" }}
            />
            Sign In
          </StyledLink>
        </div>
      )}
      {status === "success" && (
        <div>
          <StyledLink to={() => {console.log(user);}}>
            <FontAwesomeIcon
              icon={faCircleUser}
              style={{ marginRight: "5px" }}
            />
            {user.userName}
          </StyledLink>

          <StyledLink onClick={resetSession}>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              style={{ margin: "0 5px 0 10px" }}
            />
            Sign Out
          </StyledLink>
        </div>
      )}
    </StyledNav>
  );
};

export default Header;
