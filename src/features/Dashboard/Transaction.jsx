import styled from "styled-components";
import Button from "../../common/components/Button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faChevronDown,
  faChevronUp,
  faPencil,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { transactionExpenseCategories } from "../../App/selectors";
import { useDispatch, useSelector } from "react-redux";
import { modifyExpenseCategory , modifyExpenseNote } from "./accountSlice";

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 1rem;
  background-color: #00bc77;
  border-radius: 5px;

  @media (min-width: 720px) {
    flex-direction: column;

  }

  & button {
    margin-left: 1rem;
    display: inline;
    padding: 1px;
    background-color: white;
    color: #00bc77;
    font-size: 0.8rem;
    width: 70px;
    height: 20px;
  }

  & p {
    margin: 8px 8px 8px 10px;
  }

  & .close-details {
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: YellowGreen;
    color: white;
    cursor: pointer;
  }
`;

const StyledTransactionDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: white;
  cursor: pointer;

    @media (min-width: 720px) {
        font-weight: 600;
      }

  & .icon {
    display: none;
    position: relative;
    top: 7px;
    right: 15px;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      color: #00bc77;
      background-color: white;
      border-radius: 2px;
    }

    @media (min-width: 720px) {
      display: flex;
    }
  }
`;

const StyledTransactionDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
`;

const StyledTransactionDetailsInfo = styled.div`
  display: flex;
  flex-direction: row;

  & .details-type {
    width: 30%;
  }

  & .icon-details {
    font-size: 0.9rem;
    margin-left: 10px;
    cursor: pointer;
  }

  & .faXmark {
    font-size: 1.8rem;
      @media (min-width: 720px) {
      font-size: 1.3rem;
    }
  }

  & .category-select {
    background-color: white;
    height: 30px;
    cursor: pointer;
    border: none;
    width: 80%;
      
      @media (min-width: 720px) {
      width: 30%;
    }
  }

  & #button-note {
    position: absolute;
    background-color: white;
    color: green;
  }
  
  & button {
    margin-top: 1;
    color: green;
  }

  & .note-input {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 8px 8px 8px 10px;

    & .confirmation-buttons {
      display: flex;
      flex-direction: row; 
      justify-content: flex-start;

        @media (min-width: 720px) {
        display: inline;
    }
    }
  }
  
`;

const Transaction = (props) => {
  const dispatch = useDispatch();
  const transactionDetails = props.details;
  const accountNumber = props.accountNumber;
  const transactionDate = props.date;
  const transactionAmount = props.amount;
  const transactionDescription = props.description;

  const categories = useSelector(transactionExpenseCategories);

  const [collapse, setCollapse] = useState(false);

  const [collapseInputSelect, setCollapseInputSelect] = useState(false);

  const [collapseInput, setCollapseInput] = useState(false);

  const [categorySelected, setCategorySelected] = useState(transactionDetails.category);

  const [notes, setNotes] = useState(transactionDetails.note)



  const amountToEuro = (amount) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  };

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  const toggleCollapseInput = () => {
    setCollapseInput(!collapseInput);
  };

  const toggleCollapseInputSelect = () => {
    setCollapseInputSelect(!collapseInputSelect);
  };

  const handleChangeCategoryExpense = (e) => {
    setCategorySelected(e.target.value);
    const category = e.target.value
    dispatch(modifyExpenseCategory({
      accountNumber,
      transactionDate,
      transactionAmount,
      transactionDescription,
      category,
          
    }));
    toggleCollapseInputSelect()
    
  };

  const handleChangeNoteExpense = () => {
    dispatch(modifyExpenseNote({
      accountNumber,
      transactionDate,
      transactionAmount,
      transactionDescription,
      notes,
    }));
    toggleCollapseInput()
  }


  return (
    <StyledSection>
      <StyledTransactionDiv onClick={toggleCollapse}>
        <p className="date">{props.date}</p>
        <p className="description">{props.description}</p>
        <p className="amount-details">{amountToEuro(props.amount)}</p>
        <p className="balance">{amountToEuro(298)}</p>
        {!collapse ? (
          <FontAwesomeIcon
            className="icon"
            icon={faChevronDown}
            onClick={toggleCollapse}
          />
        ) : (
          <FontAwesomeIcon
            className="icon"
            icon={faXmark}
            onClick={toggleCollapse}
          />
        )}
      </StyledTransactionDiv>
      {collapse && (
        <StyledTransactionDetails>
          <StyledTransactionDetailsInfo>
            <p className="details-type">Transaction Type</p>
            <p style={{ width: "70%" }}>{transactionDetails.transactionType}</p>
          </StyledTransactionDetailsInfo>
          <StyledTransactionDetailsInfo>
            <p className="details-type">Category</p>
            {
              <p style={{ width: "70%" }}>
                {!collapseInputSelect && categorySelected}

                {collapseInputSelect && (
                  <select
                    name="category"
                    className="category-select"
                    onChange={handleChangeCategoryExpense}
                  >
                    <option value="">-- Please choose a category --</option>
                    {categories.map((category, index) => (
                      <option className="category-select" value={category} key={`${index}-${category}`}>
                        {category}
                      </option>
                    ))}
                  </select>
                )}
                {!collapseInputSelect ? (
                  <FontAwesomeIcon
                    className="icon-details"
                    icon={faPencil}
                    onClick={toggleCollapseInputSelect}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="icon-details faXmark"
                    icon={faXmark}
                    onClick={toggleCollapseInputSelect}
                  />
                )}
              </p>
            }
          </StyledTransactionDetailsInfo>


          <StyledTransactionDetailsInfo>
            <p className="details-type">Note</p>
            {            
            <div className="note-input">
              {!collapseInput && notes}
              <div>
                {collapseInput && <input placeholder={notes} onChange={(e) => setNotes(e.target.value) } maxLength="30"></input>}

                {!collapseInput ? 
                  <FontAwesomeIcon
                  className="icon-details"
                  icon={faPencil}
                  onClick={toggleCollapseInput}
                  />
                  :
                  <div className="confirmation-buttons">
                    <button onClick={handleChangeNoteExpense}>Valider</button>
                    <button onClick={toggleCollapseInput} style={{backgroundColor: "white", color: "red"}} >Annuler</button>
                  </div>
                  
                } 
              </div>


            </div>}
          </StyledTransactionDetailsInfo>
        </StyledTransactionDetails>
      )}
     {collapse &&
    <div className="close-details" onClick={toggleCollapse}>
      <FontAwesomeIcon
      className="icon-close-details"
      icon={faChevronUp}  
      />
    </div>
      }
    </StyledSection>
  );
};

export default Transaction;
