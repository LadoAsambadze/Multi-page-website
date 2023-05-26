import styled from "styled-components";

export default function Compares() {
  return (
    <>
      <Features>
        <HeaderDiv>
          <FeaturesHead>The features</FeaturesHead>
          <TypeDivTabletTest>
            <Type>Basic</Type>
            <Type>Pro</Type>
            <Type>Bussines</Type>
          </TypeDivTabletTest>
        </HeaderDiv>
        <Line></Line>
        <HeaderDiv>
          <Story>UNLIMITED STORY POSTING</Story>
          <TypeDivTablet>
            <Mark src="mark.png" />
            <Mark src="mark.png" />
            <Mark src="mark.png" />
          </TypeDivTablet>
        </HeaderDiv>
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
        <HeaderDiv>
          <Story>UNLIMITED PHOTO UPLOAD</Story>
          <TypeDivTablet>
            <Mark src="mark.png" />
            <Mark src="mark.png" />
            <Mark src="mark.png" />
          </TypeDivTablet>
        </HeaderDiv>
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
        <HeaderDiv>
          <Story>EMBEDDING CUSTOM CONTENT</Story>
          <TypeDivTablet>
            <Mark src="" />
            <Mark src="mark.png" />
            <Mark src="mark.png" />
          </TypeDivTablet>
        </HeaderDiv>
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
        <HeaderDiv>
          <Story>CUSTOMIZE METADATA</Story>
          <TypeDivTablet>
            <Mark src="" />
            <Mark src="mark.png" />
            <Mark src="mark.png" />
          </TypeDivTablet>
        </HeaderDiv>
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
        <HeaderDiv>
          <Story>ADVANCED METRICS</Story>
          <TypeDivTablet>
            <Mark src="" />
            <Mark src="" />
            <Mark src="mark.png" />
          </TypeDivTablet>
        </HeaderDiv>
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
        <HeaderDiv>
          <Story>PHOTO DOWNLOADS</Story>
          <TypeDivTablet>
            <Mark src="" />
            <Mark src="" />
            <Mark src="mark.png" />
          </TypeDivTablet>
        </HeaderDiv>
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
        <HeaderDiv>
          <Story>SEARCH ENGINE INDEXING</Story>
          <TypeDivTablet>
            <Mark src="" />
            <Mark src="" />
            <Mark src="mark.png" />
          </TypeDivTablet>
        </HeaderDiv>
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
        <HeaderDiv>
          <Story>CUSTOM ANALYTICS</Story>
          <TypeDivTablet>
            <Mark src="" />
            <Mark src="" />
            <Mark src="mark.png" />
          </TypeDivTablet>
        </HeaderDiv>
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
    </>
  );
}

const Features = styled.div`
  padding: 0px 28px 64px 28px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    padding-left: 355px;
    padding-right: 355px;
    padding-bottom: 160px;
  }
`;

const FeaturesHead = styled.span`
  width: 100%;
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
  width: 100%;
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
  @media (min-width: 768px) {
    display: none;
  }
`;

const TypeDivTabletTest = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-left: 0px;
    justify-content: space-around;
    align-items: center;
  }
`;
const TypeDivTablet = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 25px;
  }
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
  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 2px;
    color: #000000;
    opacity: 1;
  }
`;

const Mark = styled.img`
  margin-top: 8px;
  @media (min-width: 768px) {
    margin-top: 25px;
    margin: auto;
  }
`;

const LineLight = styled.div`
  width: 100%;
  border: 1px solid #dfdfdf;
  background: #dfdfdf;
  margin-top: 24px;
`;

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
`;
