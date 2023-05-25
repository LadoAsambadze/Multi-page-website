import styled from "styled-components";
import Photos from "../Components/Photo";

export default function Stories() {
  return (
    <>
      <Bitmap>
        <BitmapMobile src="stories.jpg" alt="Men on bridge" />
        <BitmapTablet src="stories-tablet.png" />
        <BitmapDesktop src="stories-desktop.png" />
        <TextBox>
          <BeoforeHeading>LAST MONTH’S FEATURED STORY</BeoforeHeading>
          <Heading>HAZY FULL MOON OF APPALACHIA</Heading>
          <DivforSpan>
            <Data>March 2nd 2020</Data>
            <Author>by John Appleseed</Author>
          </DivforSpan>
          <Text>
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </Text>
          <DivForButton>
            <GetInvite>READ THE STORY</GetInvite>
            <img src="arrow.png" alt="Arrow" />
          </DivForButton>
        </TextBox>
      </Bitmap>
      <PhotoGrid>
        <Photos
          backphoto={"/mountain.png"}
          day={"April 16th 2020"}
          photoheader={"The Mountains"}
          author={"by John Appleseed"}
        />
        <Photos
          backphoto={"/city.png"}
          day={"April 14th 2020"}
          photoheader={"Sunset Cityscapes"}
          author={"by Benjamin Cruz"}
        />
        <Photos
          backphoto={"/men.png"}
          day={"April 9th 2020"}
          photoheader={"18 Days Voyage"}
          author={"by Alexei Borodin"}
        />
        <Photos
          backphoto={"/building.png"}
          day={"April 16th 2020"}
          photoheader={"Architecturals"}
          author={"by Samantha Brooke"}
        />
        <Photos
          backphoto={"/village.png"}
          day={"April 7th 2020"}
          photoheader={"World Tour 2019"}
          author={"by Timothy Wagner"}
        />
        <Photos
          backphoto={"/tree.png"}
          day={"April 3rd 2020"}
          photoheader={"Unforeseen Corners"}
          author={"by William Malcolm"}
        />
        <Photos
          backphoto={"/lion.png"}
          day={"March 29th 2020"}
          photoheader={"King on Africa: Part II"}
          author={"by Tim Hillenburg"}
        />
        <Photos
          backphoto={"/treetwo.png"}
          day={"March 21st 2020"}
          photoheader={"The Trip to Nowhere"}
          author={"by Felicia Rourke"}
        />
        <Photos
          backphoto={"/sea.png"}
          day={"March 19th 2020"}
          photoheader={"Rage of The Sea"}
          author={"by Mohammed Abdul"}
        />
        <Photos
          backphoto={"/horse.png"}
          day={"March 16th 2020"}
          photoheader={"Running Free"}
          author={"by Michelle"}
        />
        <Photos
          backphoto={"/wave.png"}
          day={"March 11th 2020"}
          photoheader={"Behind the Waves"}
          author={"by Lamarr Wilson"}
        />
        <Photos
          backphoto={"/evening.png"}
          day={"March 9th 2020"}
          photoheader={"Calm Waters"}
          author={"by Samantha Brooke"}
        />
        <Photos
          backphoto={"/stars.png"}
          day={"March 5th 2020"}
          photoheader={"The Milky Way"}
          author={"by Benjamin Cruz"}
        />
        <Photos
          backphoto={"/rock.png"}
          day={"March 4th 2020"}
          photoheader={"Night at The Dark Forest"}
          author={"by  Mohammed Abdul"}
        />
        <Photos
          backphoto={"/flower.png"}
          day={"March 1st 2020"}
          photoheader={"Somwarpet’s Beauty"}
          author={"by Michelle"}
        />
        <Photos
          backphoto={"/lasthouse.png"}
          day={"February 25th 2020"}
          photoheader={"Land of Dreams"}
          author={"by William Malcolm"}
        />
      </PhotoGrid>
    </>
  );
}

const Bitmap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: center;
  }
`;

const BitmapMobile = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;
const BitmapTablet = styled.img`
  width: 100%;
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
  width: 100%;
  @media (min-width: 1440px) {
    display: block;
  }
`;

const TextBox = styled.div`
  width: 100%;
  background: #000000;
  padding: 48px 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 122px 342px 122px 40px;
    position: absolute;
    background: none;
  }
  @media (min-width: 1440px) {
    padding: 122px 940px 122px 114px;
    position: absolute;
    background: none;
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
  margin-top: 16px;
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 4.16667px;
    text-transform: uppercase;
    margin-top: 24px;
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
  @media (min-width: 768px) {
    margin-top: 24px;
  }
`;

const DivForButton = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-top: 24px;
  }
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

const BeoforeHeading = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  color: #ffffff;
`;
const DivforSpan = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`;

const Data = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
`;

const Author = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #ffffff;
  margin-left: 9px;
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
