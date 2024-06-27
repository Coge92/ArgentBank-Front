import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import { StyledMain } from "./SignIn";
import styled from "styled-components";
import Button from "../common/components/Button";
import Account from "../features/Dashboard/Account";
import { useSelector } from "react-redux";

const StyledDashboardHeader = styled.div`
  color: #fff;
  margin-bottom: 2rem;
  & button {
  padding: 10px
  }
`

function Dashboard() {

  const userFirstName = useSelector((state) => state.user.firstName)
  const userLastName = useSelector ((state) => state.user.lastName)

  return (
    <>
      <Header></Header>
      <StyledMain>
        <StyledDashboardHeader>
          <h1>Welcome back ! <br />{userFirstName} {userLastName} </h1>
          <Button>Edit Name</Button>
        </StyledDashboardHeader>
        <h2 className="sr-only">Accounts</h2>

        <Account 
          accountType="checking"
          description="Available Balance"
        />

        <Account 
          accountType="saving"
          description="Available Balance"
          />

        <Account 
          accountType="credit card"
          description="Current Balance"
        />


      </StyledMain>
      <Footer></Footer>
    </>
  );
}

export default Dashboard;