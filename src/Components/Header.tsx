import styled from "styled-components";
import logo from "/logo.png";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState<boolean>(true);
  return (
    <>
      <Head>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <ItemBox>
          <Link className="link link2 " to="/stories">
            stories
          </Link>
          <Link className="link link2" to="/features">
            features
          </Link>
          <Link className="link link2" to="/pricing">
            pricing
          </Link>
        </ItemBox>
        <Hamburger
          src={menu ? "/hamburger.jpg" : "/x.png"}
          alt="Hamburger menu button"
          onClick={() => {
            setMenu(!menu);
          }}
        />
        <InviteTablet>GET AN INVITE</InviteTablet>
      </Head>
      <Menu style={{ display: menu ? "none" : "flex" }}>
        <Link className="link " to="/stories">
          stories
        </Link>
        <Link className="link" to="/features">
          features
        </Link>
        <Link className="link" to="/pricing">
          pricing
        </Link>
        <Line></Line>
        <Invite>GET AN INVITE</Invite>
      </Menu>
    </>
  );
}

const Head = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 28px 25px;
  @media (min-width: 768px) {
    padding: 16px 40px;
  }
  @media (min-width: 1440px) {
    padding: 16px 165px;
  }
`;

const Hamburger = styled.img`
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Menu = styled.div`
  position: absolute;
  width: 100%;
  padding: 20px 32px 32px 32px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #ffffff;
  @media (min-width: 768px) {
    padding: 16px 40px 16px 14px;
    flex-direction: row;
    display: none;
  }
`;

const ItemBox = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-left: 5px;
  }
`;

const Line = styled.line`
  width: 100%;
  height: 1px;
  background: #000000;
  opacity: 0.25;
  margin-top: 20px;
  mix-blend-mode: normal;
`;

const Invite = styled.button`
  width: 100%;
  background-color: #000000;
  padding: 14px 69px;
  color: white;
  text-align: center;
  letter-spacing: 2.5px;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;

const InviteTablet = styled.button`
  display: none;
  @media (min-width: 768px) {
    display: block;
    background-color: #000000;
    padding: 14px 24px;
    color: white;
    text-align: center;
    letter-spacing: 2px;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    border: none;
    cursor: pointer;
    margin-left: 53px;
  }
`;
