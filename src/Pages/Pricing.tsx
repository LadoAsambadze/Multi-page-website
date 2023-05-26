import styled from "styled-components";
import Invite from "../Components/Invite";
import { useState } from "react";
import Compares from "../Components/Compare";
import PriceList from "../Components/PriceList";

export default function Pricing() {
  const [button, setButton] = useState<boolean>(false);

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
          <Clickable
            style={{
              justifyContent: button ? "flex-end" : "flex-start",
              background: button ? "black" : "#DFDFDF",
            }}
            onClick={() => {
              setButton(!button);
            }}
          >
            <Circle
              style={{ background: button ? "#FFFFFF" : "black" }}
              onClick={() => {
                setButton(!button);
              }}
            ></Circle>
          </Clickable>
          <Year>Yearly</Year>
        </ButtonDiv>
      </Prices>

      <Compare>COMPARE</Compare>
      <PriceList />
      <Compares />
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
  @media (min-width: 768px) {
    padding: 112px 257px 40px 257px;
  }
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
  transition: 0.5s;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: black;
  cursor: pointer;
  transition: 0.5s;
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

const Compare = styled.h1`
  display: none;
  @media (min-width: 768px) {
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 4.16667px;
    text-transform: uppercase;
    color: #000000;
    display: block;
    margin-bottom: 64px;
  }
`;
