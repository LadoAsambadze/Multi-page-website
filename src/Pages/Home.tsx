import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Bitmap>
        <BitmapMobile src="bitmap.jpg" alt="Men on bridge" />
        <BitmapTablet src="bitmap-tablet.jpg" />
        <BitmapDesktop src="bitmap-desktop.png" />
        <TextBox>
          <Heading>Create and share your photo stories. </Heading>
          <Text>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </Text>
          <DivForButton>
            <GetInvite>GET AN INVITE</GetInvite>
            <img src="arrow.png" alt="Arrow" />
          </DivForButton>
        </TextBox>
      </Bitmap>
      <Bitmap>
        <BitmapMobile src="bitmaptwo.jpg" alt="Laptop" />
        <BitmapTablet src="bitmap-two-tablet.png" style={{ order: "-1" }} />
        <BitmapDesktop src="bitmap-two-desktop.png" style={{ order: "-1" }} />
        <TextBox
          style={{ background: "white", padding: "136px 54px 136px 54px" }}
        >
          <Heading style={{ color: " black" }}>
            beatiful stories every time
          </Heading>
          <Text style={{ color: " black" }}>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </Text>
          <DivForButton>
            <GetInvite style={{ color: " black" }}>VIEW THE STORIES</GetInvite>
            <img src="black-arrow.png" alt="Arrow" />
          </DivForButton>
        </TextBox>
      </Bitmap>
      <Bitmap>
        <BitmapMobile src="bitmap-three.jpg" alt="Laptop" />
        <BitmapTablet src="bitmap-three-tablet.png" />
        <BitmapDesktop src="bitmap-three-desktop.png" />
        <TextBox style={{ background: "white" }}>
          <Heading style={{ color: " black" }}>DESIGNED FOR EVERYONE</Heading>
          <Text style={{ color: " black" }}>
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </Text>
          <DivForButton>
            <GetInvite style={{ color: " black" }}>VIEW THE STORIES</GetInvite>
            <img src="black-arrow.png" alt="Arrow" />
          </DivForButton>
        </TextBox>
      </Bitmap>
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
  padding: 72px 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    order: -1;
    padding: 173px 54px;
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

const DivForButton = styled.div`
  margin-top: 23px;
  width: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;
const GetInvite = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  color: #ffffff;
  margin-right: 19px;
  text-transform: uppercase;
`;
