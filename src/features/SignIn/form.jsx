import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../common/components/Button";

const StyledForm = styled.form`
  & button {
  display: block;  
  width: 100%;
  margin-top: 1rem;
  padding: 8px;
  font-size: 1.1rem;
  }
`

const StyledDivInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;

  & label {
    font-weight: bold;
  }

  & input {
    padding: 5px;
    font-size: 1.2rem;
  }
`;

const StyledDivInputRememberMe = styled.div`
  display: flex;

  & label {
    margin-left: 0.25rem;
  }
`;

const SignInForm = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard")
      };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledDivInputWrapper>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </StyledDivInputWrapper>
      <StyledDivInputWrapper>
        <label htmlFor="password">Username</label>
        <input id="password" type="password" />
      </StyledDivInputWrapper>
      <StyledDivInputRememberMe>
        <input type="checkbox" />
        <label htmlFor="remember-me">Remember me</label>
      </StyledDivInputRememberMe>
      <Button>Sign In</Button>
      
    </StyledForm>
  );
};

export default SignInForm;
