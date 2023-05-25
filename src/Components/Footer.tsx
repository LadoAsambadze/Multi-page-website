import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <FooterDiv>
        <TabletDiv>
          <DesktopDiv>
            <Extra>
              <Logo src="/logo-white.png" alt="logo" />
              <IconDiv>
                <IconImage src="/facebook.png" alt="facebook icon" />
                <IconImage src="/youtube.png" alt="youtube icon" />
                <IconImage src="/twitter.png" alt="twitter icon" />
                <IconImage src="/icon.png" alt="icon" />
                <IconImage
                  style={{ marginRight: "0" }}
                  src="/instagram.png"
                  alt="instagram icon"
                />
              </IconDiv>
            </Extra>
            <div>
              <OptionList>
                <Link className="linkfooter" to="/">
                  home
                </Link>

                <Link className="linkfooter" to="/stories">
                  stories
                </Link>

                <Link className="linkfooter" to="/features">
                  features
                </Link>

                <Link className="linkfooter" to="/pricing">
                  pricing
                </Link>
              </OptionList>
            </div>
          </DesktopDiv>
        </TabletDiv>
        <TabletDivTwo>
          <ButtonDiv>
            <Invite>GET AN INVITE</Invite>
            <Arrow src="arrow.png" alt="arrow" />
          </ButtonDiv>
          <Copyright>Copyright 2019. All Rights Reserved</Copyright>
        </TabletDivTwo>
      </FooterDiv>
    </>
  );
}

const FooterDiv = styled.div`
  width: 100%;
  padding: 56px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  @media (min-width: 768px) {
    padding: 64px 40px;
    flex-direction: row;
  }
  @media (min-width: 1440px) {
    padding: 65px 170px;
  }
`;

const TabletDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Logo = styled.img`
  order: -2;
  width: 170px;
`;
const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 32px;
  @media (min-width: 768px) {
    margin-top: 72px;
    justify-content: flex-start;
  }
  @media (min-width: 768px) {
    margin-top: 85px;
  }
`;

const IconImage = styled.img`
  margin-right: 14px;
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  @media (min-width: 768px) {
    order: -2;
    flex-direction: row;
  }
  @media (min-width: 1440px) {
    flex-direction: column;
    margin-top: 0;
    margin-left: 110px;
    margin-right: 0;
    align-items: flex-start;
  }
`;

const TabletDivTwo = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 120px;
  margin-bottom: 34px;
  @media (min-width: 768px) {
    margin-top: 0px;
    justify-content: flex-end;
  }
  @media (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;

const Invite = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  color: #ffffff;
  cursor: pointer;
`;

const Arrow = styled.img`
  margin-left: 22px;
  cursor: pointer;
`;
const Copyright = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;

  @media (min-width: 768px) {
    margin-top: 100px;
    text-align: right;
  }
  @media (min-width: 768px) {
    margin-top: 86px;
  }
`;

const DesktopDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Extra = styled.div`
  margin: auto;
  @media (min-width: 768px) {
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin-top: 22px;
  }
`;
