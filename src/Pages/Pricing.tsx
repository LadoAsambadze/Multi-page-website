import styled from "styled-components";
import Invite from "../Components/Invite";

export default function Pricing() {
  return (
    <>
      <Bitmap>
        <BitmapMobile src="pricing.jpg" />
        <BitmapTablet src="pricing-tablet.jpg" />
        <BitmapDesktop src="pricing-desktop.jpg" />
        <TextBox>
          <Heading>PRICING</Heading>
          <Text>
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </Text>
        </TextBox>
      </Bitmap>
      <Prices>
        <ButtonDiv>
          <Month>Monthly</Month>
          <Clickable>
            <Circle></Circle>
          </Clickable>
          <Year>Yearly</Year>
        </ButtonDiv>
      </Prices>
      <Basic>
        <BasicHead>Basic</BasicHead>
        <BasicText>
          Includes basic usage of our platform. Recommended for new and aspiring
          photographers.
        </BasicText>
        <Dollar>$ 19.00</Dollar>
        <UnderDollar>per month</UnderDollar>
        <PickPlan>Pick Plan</PickPlan>
      </Basic>
      <Basic>
        <BasicHead>Pro</BasicHead>
        <BasicText>
          More advanced features available. Recommended for photography veterans
          and professionals.
        </BasicText>
        <Dollar>$ 39.00</Dollar>
        <UnderDollar>per month</UnderDollar>
        <PickPlan>Pick Plan</PickPlan>
      </Basic>
      <Basic>
        <BasicHead>Bussines</BasicHead>
        <BasicText>
          Additional features available such as more detailed metrics.
          Recommended for business owners.
        </BasicText>
        <Dollar>$ 99.00</Dollar>
        <UnderDollar>per month</UnderDollar>
        <PickPlan>Pick Plan</PickPlan>
      </Basic>
      <Features>
        <FeaturesHead>The features</FeaturesHead>
        <Line></Line>
        <Story>UNLIMITED STORY POSTING</Story>
        <TypesDiv>
          <TypeDiv>
            <Type>Basic</Type>
            <Mark src="mark.png" />
          </TypeDiv>
          <TypeDiv>
            <Type>Pro</Type>
            <Mark src="mark.png" />
          </TypeDiv>
          <TypeDiv>
            <Type>Bussines</Type>
            <Mark src="mark.png" />
          </TypeDiv>
        </TypesDiv>
        <LineLight></LineLight>
        <Story>UNLIMITED PHOTO UPLOAD</Story>
        <TypesDiv>
          <TypeDiv>
            <Type>Basic</Type>
            <Mark src="mark.png" />
          </TypeDiv>
          <TypeDiv>
            <Type>Pro</Type>
            <Mark src="mark.png" />
          </TypeDiv>
          <TypeDiv>
            <Type>Bussines</Type>
            <Mark src="mark.png" />
          </TypeDiv>
        </TypesDiv>
        <LineLight></LineLight>
        <Story>EMBEDDING CUSTOM CONTENT</Story>
        <TypesDiv>
          <TypeDiv>
            <Type>Basic</Type>
          </TypeDiv>
          <TypeDiv>
            <Type>Pro</Type>
            <Mark src="mark.png" />
          </TypeDiv>
          <TypeDiv>
            <Type>Bussines</Type>
            <Mark src="mark.png" />
          </TypeDiv>
        </TypesDiv>
        <LineLight></LineLight>
        <Story>CUSTOMIZE METADATA</Story>
        <TypesDiv>
          <TypeDiv>
            <Type>Basic</Type>
          </TypeDiv>
          <TypeDiv>
            <Type>Pro</Type>
            <Mark src="mark.png" />
          </TypeDiv>
          <TypeDiv>
            <Type>Bussines</Type>
            <Mark src="mark.png" />
          </TypeDiv>
        </TypesDiv>
        <LineLight></LineLight>
        <Story>ADVANCED METRICS</Story>
        <TypesDiv>
          <TypeDiv>
            <Type>Basic</Type>
          </TypeDiv>
          <TypeDiv>
            <Type>Pro</Type>
          </TypeDiv>
          <TypeDiv>
            <Type>Bussines</Type>
            <Mark src="mark.png" />
          </TypeDiv>
        </TypesDiv>
        <LineLight></LineLight>
        <Story>PHOTO DOWNLOADS</Story>
        <TypesDiv>
          <TypeDiv>
            <Type>Basic</Type>
          </TypeDiv>
          <TypeDiv>
            <Type>Pro</Type>
          </TypeDiv>
          <TypeDiv>
            <Type>Bussines</Type>
            <Mark src="mark.png" />
          </TypeDiv>
        </TypesDiv>
        <LineLight></LineLight>
        <Story>SEARCH ENGINE INDEXING</Story>
        <TypesDiv>
          <TypeDiv>
            <Type>Basic</Type>
          </TypeDiv>
          <TypeDiv>
            <Type>Pro</Type>
          </TypeDiv>
          <TypeDiv>
            <Type>Bussines</Type>
            <Mark src="mark.png" />
          </TypeDiv>
        </TypesDiv>
        <LineLight></LineLight>
        <Story>CUSTOM ANALYTICS</Story>
        <TypesDiv>
          <TypeDiv>
            <Type>Basic</Type>
          </TypeDiv>
          <TypeDiv>
            <Type>Pro</Type>
          </TypeDiv>
          <TypeDiv>
            <Type>Bussines</Type>
            <Mark src="mark.png" />
          </TypeDiv>
        </TypesDiv>
        <LineLight></LineLight>
      </Features>
      <Invite />
    </>
  );
}

const Bitmap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const BitmapMobile = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;
const BitmapTablet = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

const BitmapDesktop = styled.img`
  display: none;
  @media (min-width: 1440px) {
    display: block;
  }
`;

const TextBox = styled.div`
  width: 100%;
  background: #000000;
  padding: 72px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    order: -1;
    padding: 173px 54px;
  }
  @media (min-width: 1440px) {
    order: -1;
    padding: 173px 112px;
  }
`;

const Heading = styled.h1`
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  letter-spacing: 3.33333px;
  text-transform: uppercase;
  color: white;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  mix-blend-mode: normal;
  opacity: 0.6;
  color: white;
  margin-top: 16px;
`;

const Prices = styled.div`
  width: 100%;
  padding: 64px 28px;
  display: flex;
  flex-direction: column;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Month = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: right;
  color: #000000;
`;

const Clickable = styled.div`
  display: flex;
  justify-content: flex-start;
  background: #dfdfdf;
  border-radius: 16px;
  width: 64px;
  padding: 4px;
  margin-left: 36px;
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: black;
  cursor: pointer;
`;

const Year = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: right;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-left: 36px;
`;

const Basic = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 56px 36px 40px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BasicHead = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 25px;
  text-align: center;
  color: #000000;
`;

const BasicText = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.6;
  margin-top: 18px;
`;

const Dollar = styled.span`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  letter-spacing: 4.16667px;
  text-transform: uppercase;
  color: #000000;
  margin-top: 40px;
`;
const UnderDollar = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.6;
`;

const PickPlan = styled.button`
  padding: 12px 37px;
  background: black;
  color: white;
  margin-top: 52px;
  width: 100%;
  text-align: center;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
`;

const Features = styled.div`
  padding: 0px 28px 64px 28px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FeaturesHead = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  text-align: left;
  color: #000000;
  text-transform: uppercase;
`;

const Line = styled.div`
  border: 1px solid #000000;
  margin-top: 23px;
  width: 100%;
`;

const Story = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  color: #000000;
  text-transform: uppercase;
  margin-top: 23px;
`;

const TypesDiv = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const TypeDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Type = styled.span`
  font-weight: 700;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: 1.66667px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  text-transform: uppercase;
`;

const Mark = styled.img`
  margin-top: 8px;
`;

const LineLight = styled.div`
  width: 100%;
  border: 1px solid #dfdfdf;
  background: #dfdfdf;
  margin-top: 24px;
`;
