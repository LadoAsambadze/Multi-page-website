import styled from "styled-components";
import Benefit from "../Components/Benefit";
import Invite from "../Components/Invite";

export default function Features() {
  return (
    <>
      <Bitmap>
        <BitmapMobile src="features.jpg" alt="Men on bridge" />
        <BitmapTablet src="features-tablet.jpg" />
        <BitmapDesktop src="features-desktop.png" />
        <TextBox>
          <Heading>Features</Heading>
          <Text>
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </Text>
        </TextBox>
      </Bitmap>
      <Benefits>
        <Benefit
          benefitPhoto={"responsive.png"}
          percent={"100% Responsive"}
          benefitText={
            "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
          }
        />
        <Benefit
          benefitPhoto={"forever.png"}
          percent={"No Photo Upload Limit"}
          benefitText={
            "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
          }
        />
        <Benefit
          benefitPhoto={"bullhorn.png"}
          percent={"Available to Embed"}
          benefitText={
            "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
          }
        />

        <Benefit
          benefitPhoto={"loop.png"}
          percent={"Custom Domain"}
          benefitText={
            "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
          }
        />
        <Benefit
          benefitPhoto={"drag.png"}
          percent={"Boost Your Exposure"}
          benefitText={
            "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
          }
        />
        <Benefit
          benefitPhoto={"slider.png"}
          percent={"Drag & Drop Image"}
          benefitText={
            "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
          }
        />
      </Benefits>
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
    padding: 173px 112px;
    text-align: left;
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

const Benefits = styled.div`
  width: 100%;
  padding: 24px 32px 80px 32px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  @media (min-width: 768px) {
    padding: 40px 40px 40px 40px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media (min-width: 1440px) {
    padding: 120px 165px;
    flex-direction: row;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 20px;
    column-gap: 40px;
  }
`;
