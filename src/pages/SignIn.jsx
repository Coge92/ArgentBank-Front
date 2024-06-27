import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import SignInForm from "../features/SignIn/form";

export const StyledMain = styled.main`
  background-color: #12002b;
  flex: 1;

  & .sign-in-content {
    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem;
  }
`

function SignIn() {
  return (
    <>
      {/* ajouter Provider Redux */}
      <Header></Header>
      <StyledMain>
        <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <SignInForm></SignInForm>      
        </section>

      </StyledMain>
      <Footer></Footer>
    </>
  );
}

export default SignIn;