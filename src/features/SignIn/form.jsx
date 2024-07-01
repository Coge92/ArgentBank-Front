import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../common/components/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "./sessionSlice";
import { sessionStatus } from "../../App/selectors";

const StyledForm = styled.form`
  & button {
    display: block;
    width: 100%;
    margin-top: 1rem;
    padding: 8px;
    font-size: 1.1rem;
  }
`;

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [emailLogin, setEmailLogin] = useState("");
  const [passLogin, setPassLogin] = useState("");

  const status = useSelector(sessionStatus);

  const data = { email: emailLogin, password: passLogin };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLogin(data));
  };

  useEffect(() => {
    if (status === "success") {
      // console.log(">>>token>>>", token);
      navigate("/dashboard");
    }
    return;
  }, [status]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledDivInputWrapper>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={(e) => setEmailLogin(e.target.value)}
          required
        />
      </StyledDivInputWrapper>
      <StyledDivInputWrapper>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPassLogin(e.target.value)}
          required
        />
      </StyledDivInputWrapper>
      <StyledDivInputRememberMe>
        <input type="checkbox" />
        <label htmlFor="remember-me">Remember me</label>
      </StyledDivInputRememberMe>
      <Button>Sign In</Button>
      {status === "success" && <p>Ok</p>}
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && (
        <p style={{ color: "red" }}>Email ou mot de passe incorrect</p>
      )}
    </StyledForm>
  );
};

export default SignInForm;
