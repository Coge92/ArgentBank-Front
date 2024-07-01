import { useState } from "react";
import { userdata, sessiontoken, sessionStatus } from "../../App/selectors";
import EditUserForm from "./EditUserForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";
import Button from "../../common/components/Button";
import { fetchDataUser } from "./userSlice";

const StyledDashboardHeader = styled.div`
  color: #fff;
  margin-bottom: 2rem;
  & button {
    padding: 10px;
  }
`;

const HeaderDashboard = () => {
  const dispatch = useDispatch();

  const user = useSelector(userdata);
  // console.log(">>state Initial user>>>>", user);

  const token = useSelector(sessiontoken);
  // console.log(">>>token>>>", token);

  const status = useSelector(sessionStatus);
  // console.log(">>>>status>>>", status);

  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    dispatch(fetchDataUser(token));
  }, [user]);

  return (
    <StyledDashboardHeader>
      {!collapse ? (
        <h1>
          Welcome back ! <br />
          {user.firstName} {user.lastName}
        </h1>
      ) : (
        <h1>Edit User Info</h1>
      )}
      {collapse && (
        <EditUserForm
          username={user.userName}
          firstname={user.firstName}
          lastname={user.lastName}
          collapse={collapse}
          setCollapse={setCollapse}
        ></EditUserForm>
      )}
      {!collapse && (
        <Button
          onClick={() => {
            setCollapse(!collapse);
          }}
        >
          Edit Name
        </Button>
      )}
    </StyledDashboardHeader>
  );
};

export default HeaderDashboard;
