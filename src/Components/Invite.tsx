import styled from "styled-components";

export default function Invite() {
  return (
    <>
      <Main>
        <Mobile src="invite.png" />
        <Tablet src="invite-tablet.jpg" />
        <Desktop src="invite-desktop.png" />
        <TextBox>
          <Heading>We’re in beta. Get your invite today!</Heading>
          <ButtonDiv>
            <Span>GET AN INVITE</Span>
            <Arrow src="arrow.png" alt="arrow" />
          </ButtonDiv>
        </TextBox>
      </Main>
    </>
  );
}

const Main = styled.div`
  width: 100%;
  position: relative;
`;
const Mobile = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;
const Tablet = styled.img`
  width: 100%;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;
const Desktop = styled.img`
  width: 100%;
  display: none;

  @media (min-width: 1440px) {
    display: block;
  }
`;

const TextBox = styled.div`
  width: 100%;
  position: absolute;
  padding: 64px 32px;
  transform: translateY(-100%);
  @media (min-width: 768px) {
    padding: 68px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    transform: translateY(-120%);
  }
  @media (min-width: 1440px) {
    padding: 68px 165px;
    transform: translateY(-125%);
  }
`;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 3.33333px;
  text-transform: uppercase;
  color: #ffffff;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  @media (min-width: 768px) {
    justify-content: flex-end;
    margin: 0;
  }
`;
const Span = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  letter-spacing: 2px;
  color: #ffffff;
  cursor: pointer;
`;

const Arrow = styled.img`
  margin-left: 16px;
  cursor: pointer;
`;
