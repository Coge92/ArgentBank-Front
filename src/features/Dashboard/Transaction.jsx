import styled from "styled-components";
import Button from "../../common/components/Button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 1rem;

  @media (min-width: 720px) {
    flex-direction: column;

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

  & p { 
    margin: 8px;  
  }


`;

const StyledTransactionDiv = styled.div`

display: flex;
flex-direction: row;
width: 100%;
background-color: #00bc77;
border-radius: 5px;
color: white;
font-weight: 600;

& .icon {
  
  }

`

const Transaction = (props) => {

  const transactionDetails = props.details

  console.log(props.date);

  const [collapse, setCollapse] = useState(false);

  const amountToEuro = (amount) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount);
  }



  return (
    <StyledSection>
      <StyledTransactionDiv>
        <p style={{marginLeft: "10px", width: "20%"}}>{props.date}</p>
        <p style={{marginLeft: "10px", width: "40%"}}>{props.description}</p>
        <p style={{marginLeft: "10px", width: "20%"}}>{amountToEuro(props.amount)}</p>
        <p style={{marginLeft: "", width: "20%"}}>{amountToEuro(298)}</p>
        {!collapse ? 
          (<FontAwesomeIcon style={{position: "relative", top: "7px", right: "15px"}} icon={faChevronDown} />) 
          : 
          (
            <FontAwesomeIcon
              className="icon"
              onClick={() => {
                setCollapse(!collapse);
              }}
              icon={faSquareXmark}
            />
          )}

      </StyledTransactionDiv>
    </StyledSection>
  );
};

export default Transaction;
