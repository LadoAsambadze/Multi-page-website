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
      <PhotoGrid>
        <Photo>
          <InsidePhoto src="/mountain.png" />
          <TextOnPhoto>
            <PhotoHeader>The Mountains</PhotoHeader>
            <Author>by John Appleseed</Author>
            <Line></Line>
            <DivForButtons>
              <Story>READ STORY</Story>
              <StoryArrow src="arrow.png" alt="Arrow" />
            </DivForButtons>
          </TextOnPhoto>
        </Photo>
        <Photo>
          <InsidePhoto src="/city.png" />
          <TextOnPhoto>
            <PhotoHeader>Sunset Cityscapes</PhotoHeader>
            <Author>by Benjamin Cruz</Author>
            <Line></Line>
            <DivForButtons>
              <Story>READ STORY</Story>
              <StoryArrow src="arrow.png" alt="Arrow" />
            </DivForButtons>
          </TextOnPhoto>
        </Photo>
        <Photo>
          <InsidePhoto src="/men.png" />
          <TextOnPhoto>
            <PhotoHeader>18 Days Voyage</PhotoHeader>
            <Author>by Alexei Borodin</Author>
            <Line></Line>
            <DivForButtons>
              <Story>READ STORY</Story>
              <StoryArrow src="arrow.png" alt="Arrow" />
            </DivForButtons>
          </TextOnPhoto>
        </Photo>
        <Photo>
          <InsidePhoto src="/building.png" />
          <TextOnPhoto>
            <PhotoHeader>Architecturals</PhotoHeader>
            <Author>by Samantha Brooke</Author>
            <Line></Line>
            <DivForButtons>
              <Story>READ STORY</Story>
              <StoryArrow src="arrow.png" alt="Arrow" />
            </DivForButtons>
          </TextOnPhoto>
        </Photo>
      </PhotoGrid>
      <Benefits>
        <BenefitSection>
          <img src="responsive.png" alt="Responsive pc logo" />
          <Percent>100% Responsive</Percent>
          <BenefitText>
            No matter which the device you’re on, our site is fully responsive
            and stories look beautiful on any screen.
          </BenefitText>
        </BenefitSection>
        <BenefitSection>
          <img src="forever.png" alt="unlimited" />
          <Percent2>No Photo Upload Limit</Percent2>
          <BenefitText>
            Our tool has no limits on uploads or bandwidth. Freely upload in
            bulk and share all of your stories in one go..
          </BenefitText>
        </BenefitSection>
        <BenefitSection>
          <img src="bullhorn.png" alt="bullhorn" />
          <Percent>Available to Embed</Percent>
          <BenefitText>
            Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
            videos, Google Maps, and more.
          </BenefitText>
        </BenefitSection>
      </Benefits>
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

const PhotoGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 0;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;

const Photo = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const InsidePhoto = styled.img`
  width: 100%;
  height: 100%;
`;

const TextOnPhoto = styled.div`
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 45px;
  position: absolute;
  transform: translateY(-103%);
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0.27%,
    rgba(0, 0, 0, 0.661222) 100%
  );
`;

const PhotoHeader = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: white;
`;
const Author = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: white;
  margin-top: 4px;
`;

const Line = styled.div`
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.25;
  width: 100%;
  height: 1px;
  margin-top: 16px;
`;

const DivForButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Story = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  color: #ffffff;
`;

const StoryArrow = styled.img`
  cursor: pointer;
`;

const Benefits = styled.div`
  width: 100%;
  padding: 24px 32px 80px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    padding: 40px 156px 120px 156px;
  }
  @media (min-width: 1440px) {
    padding: 120px 165px;
    flex-direction: row;
    justify-content: center;
  }
`;
const BenefitSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Percent2 = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #000000;
  margin-top: 48px;
  @media (min-width: 1440px) {
    margin-top: 80px;
  }
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
