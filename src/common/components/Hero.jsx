import imgBackground from "../../img/bank-tree.jpeg";
import styled from "styled-components";

const StyledHero = styled.div`
  background-image: url("${imgBackground}");
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;

  @media (min-width: 920px) {
    height: 400px;
    background-position: 0% 33%;
  }
`;

const StyledHeroContent = styled.section`
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;

  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }

  & .subtitle {
    font-weight: bold;
    font-size: 1rem;
    margin: 0;

    @media (min-width: 920px) {
      font-size: 1.5rem;
    }
  }

  & .text {
    margin-bottom: 0;
    font-size: 0.9rem;

    @media (min-width: 920px) {
      font-size: 1.2rem;
    }
  }
`;

const Hero = () => {
  return (
    <>
      <StyledHero>
        <StyledHeroContent>
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </StyledHeroContent>
      </StyledHero>
    </>
  );
};

export default Hero;
