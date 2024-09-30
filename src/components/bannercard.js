import styled from "styled-components";

const BannerCard = ({ homeBanner }) => {
  return (
    <Wrapper background={homeBanner.Banner.file.url}>

      <Title>{homeBanner.Title}</Title>
      {/* <Subtitle>{author.description}</Subtitle> */}

    </Wrapper>
  );
};

export default BannerCard;

const Wrapper = styled.div`
  display: grid;
  align-items: flex-end;
  width: 1230px;
  height: 300px;
  background: ${(props) =>
    props.background && `url(${props.background}) center no-repeat`};
  background-size: auto 150%;
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  margin: 0;
  font-weight: bold;
  color: #000000;
  margin: 0px;
`;


