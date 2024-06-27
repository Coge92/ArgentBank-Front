import styled from "styled-components";
import FeatureItem from "./FeatureItem";
import ImageChat from "../../img//icon-chat.png";
import ImageMoney from "../../img/icon-money.png";
import ImageSecurity from "../../img/icon-security.png";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

const Features = () => {
  return (
    <>
      <StyledSection>
        <FeatureItem
          image={ImageChat}
          altImage="Icone Chat"
          h3="You are our #1 priority"
          text="
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
        ></FeatureItem>

        <FeatureItem
          image={ImageMoney}
          altImage="Icone Money"
          h3="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        ></FeatureItem>

        <FeatureItem
          image={ImageSecurity}
          altImage="Icone Security"
          h3="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is always safe. "
        ></FeatureItem>
      </StyledSection>
    </>
  );
};

export default Features;
