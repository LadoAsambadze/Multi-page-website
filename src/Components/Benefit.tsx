import styled from "styled-components";
interface details {
  benefitPhoto: string;
  percent: string;
  benefitText: string;
}
export default function Benefit({
  benefitPhoto,
  percent,
  benefitText,
}: details) {
  return (
    <>
      <BenefitSection>
        <img src={benefitPhoto} />
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
  justify-content: flex-end;
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
