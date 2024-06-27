import styled from "styled-components";
import Button from "../../common/components/Button";

const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;

  @media (min-width: 720px) {
    flex-direction: row;

    & .cta {
    flex: 0}
  }

  & .title {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
  }

  & .amount {
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
  }

  & .amount-description {
    margin: 0;
  }

  & button {
    margin-top: 1rem;
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;

    @media (min-width: 720px) {
    width: 200px;    
    }
  }
`;

  const StyledDiv = styled.div`
  width: 100%;
  flex: 1;
  `

const Account = (props) => {
  let acountName = "";

  switch (props.accountType) {
    case "checking":
      acountName = "Argent Bank Checking {var xNUMACCOUNT}";
      break;
    case "saving":
      acountName = "Argent Bank Checking {var xNUMACCOUNT}";
      break;
    case "credit card":
      acountName = "Argent Bank Checking {var xNUMACCOUNT}";
      break;
    default:
      acountName = "Agent Bank Account"
  }

  return (
    <StyledSection>
      <StyledDiv>
        <h3 className="title">{acountName}</h3>
        <p className="amount">$ Var Amount</p>
        <p className="amount-description">{props.description}</p>
      </StyledDiv>
      <StyledDiv className="cta">
        <Button>View transactions</Button>
      </StyledDiv>
      
    </StyledSection>
  );
};

export default Account;
