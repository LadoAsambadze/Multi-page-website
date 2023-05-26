import styled from "styled-components";
import { useState } from "react";

export default function PriceList() {
  const [plan, setPlan] = useState<number>(2);
  return (
    <>
      <Main>
        <Basic
          style={{
            background: plan === 1 ? "black" : "white",
          }}
        >
          <ResponsiveDiv>
            <ResponsiveDivInside>
              <BasicHead
                style={{
                  color: plan === 1 ? "white" : "black",
                }}
              >
                Basic
              </BasicHead>
              <BasicText
                style={{
                  color: plan === 1 ? "white" : "black",
                }}
              >
                Includes basic usage of our platform. Recommended for new and
                aspiring photographers.
              </BasicText>
            </ResponsiveDivInside>
            <ResponsiveDivInside>
              <Dollar
                style={{
                  color: plan === 1 ? "white" : "black",
                }}
              >
                $ 19.00
              </Dollar>
              <UnderDollar
                style={{
                  color: plan === 1 ? "white" : "black",
                }}
              >
                per month
              </UnderDollar>
            </ResponsiveDivInside>
          </ResponsiveDiv>
          <PickPlan
            style={{
              background: plan === 1 ? "white" : "black",
              color: plan === 1 ? "black" : "white",
            }}
            onClick={() => {
              setPlan(1);
            }}
          >
            Pick Plan
          </PickPlan>
        </Basic>
        <Basic
          style={{
            background: plan === 2 ? "black" : "white",
          }}
        >
          <ResponsiveDiv>
            <ResponsiveDivInside>
              <BasicHead
                style={{
                  color: plan === 2 ? "white" : "black",
                }}
              >
                Pro
              </BasicHead>
              <BasicText
                style={{
                  color: plan === 2 ? "white" : "black",
                }}
              >
                More advanced features available. Recommended for photography
                veterans and professionals.
              </BasicText>
            </ResponsiveDivInside>
            <ResponsiveDivInside>
              <Dollar
                style={{
                  color: plan === 2 ? "white" : "black",
                }}
              >
                $ 39.00
              </Dollar>
              <UnderDollar
                style={{
                  color: plan === 2 ? "white" : "black",
                }}
              >
                per month
              </UnderDollar>
            </ResponsiveDivInside>
          </ResponsiveDiv>
          <PickPlan
            style={{
              background: plan === 2 ? "white" : "black",
              color: plan === 2 ? "black" : "white",
            }}
            onClick={() => {
              setPlan(2);
            }}
          >
            Pick Plan
          </PickPlan>
        </Basic>
        <Basic
          style={{
            marginRight: "0",
            background: plan === 3 ? "black" : "white",
          }}
        >
          <ResponsiveDiv>
            <ResponsiveDivInside>
              <BasicHead
                style={{
                  color: plan === 3 ? "white" : "black",
                }}
              >
                Bussines
              </BasicHead>
              <BasicText
                style={{
                  color: plan === 3 ? "white" : "black",
                }}
              >
                Additional features available such as more detailed metrics.
                Recommended for business owners.
              </BasicText>
            </ResponsiveDivInside>
            <ResponsiveDivInside>
              <Dollar
                style={{
                  color: plan === 3 ? "white" : "black",
                }}
              >
                $ 99.00
              </Dollar>
              <UnderDollar
                style={{
                  color: plan === 3 ? "white" : "black",
                }}
              >
                per month
              </UnderDollar>
            </ResponsiveDivInside>
          </ResponsiveDiv>
          <PickPlan
            style={{
              background: plan === 3 ? "white" : "black",
              color: plan === 3 ? "black" : "white",
            }}
            onClick={() => {
              setPlan(3);
            }}
          >
            Pick Plan
          </PickPlan>
        </Basic>
      </Main>
    </>
  );
}

const Main = styled.div`
  padding: 0px 40px 112px 40px;
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

const ResponsiveDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 1440px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ResponsiveDivInside = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Basic = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 56px 36px 40px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  transition: 0.5s;
  @media (min-width: 768px) {
    margin-top: 24px;
    padding: 40px 48px;
    align-items: flex-start;
  }
  @media (min-width: 1440px) {
    align-items: center;
    margin-top: 0;
    margin-right: 30px;
    padding: 56px 40px 40px 40px;
  }
`;

const BasicHead = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 25px;
  text-align: center;
  color: #000000;
  @media (min-width: 768px) {
    text-align: left;
  }
  @media (min-width: 1440px) {
    text-align: center;
  }
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
  @media (min-width: 768px) {
    text-align: left;
  }
  @media (min-width: 1440px) {
    align-items: center;
  }
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
  @media (min-width: 768px) {
    margin-top: 0px;
  }
  @media (min-width: 1440px) {
    margin-top: 40px;
  }
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
  @media (min-width: 768px) {
    width: 50%;
    margin-top: 32px;
  }
  @media (min-width: 1440px) {
    width: 100%;
    margin-top: 40px;
  }
`;
