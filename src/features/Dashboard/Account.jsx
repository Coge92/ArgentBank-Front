import styled from "styled-components";
import Button from "../../common/components/Button";
import { useState } from "react";
import Transaction from "./Transaction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;

  @media (min-width: 720px) {
    flex-direction: row;

    & .cta {
      flex: 0;
    }
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
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  flex: 1;
  & .icon {
    font-size: 2.5rem;
    color: #00bc77;
    cursor: pointer;
  }
`;

const StyledTab = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Account = (props) => {
  const [collapse, setCollapse] = useState(false);

  const lastAccountNumber = props.accountNumber.toString().substr(-4);

  const transactions = props.accountTransactions;

  console.log(transactions);

  return (
    <>
      <StyledSection>
        <StyledDiv>
          <h3 className="title">
            Argent Bank {props.accountType} (x{lastAccountNumber})
          </h3>
          <p className="amount">{props.accountAmount}</p>
          <p className="amount-description">{props.description}</p>
        </StyledDiv>
        <StyledDiv className="cta">
          {!collapse ? (
            <Button
              onClick={() => {
                setCollapse(!collapse);
              }}
            >
              View transactions
            </Button>
          ) : (
            <FontAwesomeIcon
              className="icon"
              onClick={() => {
                setCollapse(!collapse);
              }}
              icon={faSquareXmark}
            />
          )}
        </StyledDiv>
      </StyledSection>
      {collapse && (
        <StyledSection style={{ marginTop: "-32px", borderTop: "none" }}>
          <StyledTab>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p style={{ marginLeft: "25px", width: "20%" }}>Date</p>
              <p style={{ marginLeft: "40px", width: "40%" }}>Description</p>
              <p style={{ marginLeft: "10px", width: "20%" }}>Amount</p>
              <p style={{ marginLeft: "10px", width: "20%" }}>Balance</p>
            </div>

            {transactions.map((transaction, index) => (
              <Transaction
              
                date={transaction.date}
                description={transaction.description}
                amount={transaction.amount}
                details={transaction.details}
                key={`${index}-${transaction.description} -${transaction.amount}`}
              ></Transaction>
            ))}
          </StyledTab>
        </StyledSection>
      )}
    </>
  );
};

export default Account;
