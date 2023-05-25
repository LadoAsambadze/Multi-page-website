import styled from "styled-components";

export default function Photos({ backphoto, photoheader, author, day }: any) {
  return (
    <>
      <Photo>
        <InsidePhoto src={backphoto} />
        <TextOnPhoto>
          <Data>{day}</Data>
          <PhotoHeader>{photoheader}</PhotoHeader>
          <Author>{author}</Author>
          <Line></Line>
          <DivForButtons>
            <Story>READ STORY</Story>
            <StoryArrow src="arrow.png" alt="Arrow" />
          </DivForButtons>
        </TextOnPhoto>
      </Photo>
    </>
  );
}

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

const Data = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #ffffff;
  margin-bottom: 4px;
`;
