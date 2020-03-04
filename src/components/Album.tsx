import React from "react";
import {Artist} from "../types/artist";
import styled from "styled-components";
import {Link} from "react-router-dom";
import ChangeFavoriteButton from "./ChangeFavoriteButton";

const Card = styled.div`
  padding: 18px;
  width: calc(100% - (18px * 2));
  display: inline-grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  box-shadow: 0 1px 3px 0 #e7e7e7;

  button {
    justify-self: end;
  }
`;

const AlbumTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: start;

  h3 {
    font-family: WorkSans, serif;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: -0.66px;
    margin-top: 4px;
    margin-bottom: 4px;
  }
`;

const ArtistName = styled(Link)`
  font-family: WorkSans, serif;
  text-decoration: none;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.44px;
  margin-top: 6px;
  margin-bottom: 6px;
  color: #a0a0a0;
`;

const Cover = styled.img`
  height: 54px;
  width: 54px;
  margin-right: 25px;
`;

const Release = styled.p`
  font-family: WorkSans, serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.51px;
  color: #a0a0a0;
`;

const Year = styled.span`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.51px;
  color: #000000;
`;

const Price = styled.p`
  font-family: WorkSans, serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.51px;
  color: #000000;
`;

interface Props {
  imageUrl: string;
  title: string;
  releaseDate: Date;
  price: string;
  favorite: boolean;
  artist: Artist;
}

const Album: React.FC<Props> = ({imageUrl, title, releaseDate, price, favorite, artist}) => (
  <Card>
    <AlbumTitle>
      <Cover src={imageUrl} alt={`Cover for ${title} by ${artist.title}`}/>
      <div>
        <h3>{title}</h3>
        <ArtistName to={`/artist/${artist.id}`}>{artist.title}</ArtistName>
      </div>
    </AlbumTitle>
    <Release>Released: <Year>{releaseDate.getFullYear()}</Year></Release>
    <Price>{price}</Price>

    <ChangeFavoriteButton favorite={favorite} />
  </Card>
);

export default Album;
