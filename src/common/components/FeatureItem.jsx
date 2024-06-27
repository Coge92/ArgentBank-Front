import styled from "styled-components";

const StyledDiv = styled.div`
  flex: 1;
  padding: 2.5rem;

  & .feature-image {
    width: 100px;
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 1rem;
  }

  & .feature-item-title {
    color: #222;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

const FeatureItem = (props) => {
  return (
    <>
      <StyledDiv>
        <img
          src={props.image}
          className="feature-image"
          alt={props.altImage}
        ></img>
        <h3 className="feature-item-title">{props.h3}</h3>
        <p>{props.text}</p>
      </StyledDiv>
    </>
  );
};

export default FeatureItem;
