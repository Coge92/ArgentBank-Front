import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

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
  return (
    <StyledNav>
      <Link to="/">
        <img src={logo} alt="Logo Argent Bank" style={{ width: "200px" }}></img>
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <StyledLink to="/signin">
          <FontAwesomeIcon icon={faCircleUser} style={{ marginRight: "5px" }} />
          Sign In
        </StyledLink>
      </div>
    </StyledNav>
  );
};

export default Header;
