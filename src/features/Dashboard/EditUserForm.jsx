import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import Button from "../../common/components/Button";
import { useState } from "react";
import { fetchNewUserName } from "./userSlice";
import { sessiontoken } from "../../App/selectors";

const StyledForm = styled.form`
  margin: auto;
  width: 300px;

  & .button-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
  }

  & button {
    display: block;
    width: 33%;
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
    color: white;
  }
`;

const EditUserForm = (props) => {

  const [newUserName, setNewUserName] = useState(props.userName); // Variable du nouveau userName
  const dispatch = useDispatch();

  const token = useSelector(sessiontoken) 

  const dataUserName = { userName: newUserName }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUserName);
    dispatch(fetchNewUserName({ fetchedUserName: dataUserName, token })); // CreateAsyncThunk n'accepte qu'un argurment
    props.setCollapse(!props.collapse);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledDivInputWrapper>
        <label htmlFor="username">User name</label>
        <input
          style={{ color: "#2c3e50" }}
          id="username"
          type="text"
          placeholder={props.username}
          onChange={(e) => setNewUserName(e.target.value)}
          required
        />
      </StyledDivInputWrapper>
      <StyledDivInputWrapper>
        <label htmlFor="firstname">First name</label>
        <input
          id="firstname"
          type="text"
          placeholder={props.firstname}
          disabled
        />
      </StyledDivInputWrapper>
      <StyledDivInputWrapper>
        <label htmlFor="lastname">Last name</label>
        <input
          id="lastname"
          type="text"
          placeholder={props.lastname}
          disabled
        />
      </StyledDivInputWrapper>

      <div className="button-container">
        <Button>Save</Button>
        <Button
          onClick={() => {
            props.setCollapse(!props.collapse);
          }}
        >
          Cancel
        </Button>
      </div>
    </StyledForm>
  );
};

export default EditUserForm;
