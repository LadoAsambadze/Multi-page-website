import styled from "styled-components";

export default function Benefit({ benefitPhoto, percent, benefitText }: any) {
  return (
    <>
      <BenefitSection>
        <img src={benefitPhoto} alt="Responsive pc logo" />
        <Percent>{percent}</Percent>
        <BenefitText>{benefitText}</BenefitText>
      </BenefitSection>
    </>
  );
}

const BenefitSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 56px;
  @media (min-width: 768px) {
    margin-top: 85px;
  }
  @media (min-width: 1440px) {
    margin-top: 0;
  }
`;

const Percent = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #000000;
  margin-top: 48px;
`;



const BenefitText = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.6;
  margin-top: 16px;
`;
