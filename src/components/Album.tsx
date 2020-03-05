import React from "react";
import {Artist} from "../types/artist";
import styled from "styled-components";
import {Link} from "react-router-dom";
import ChangeFavoriteButton from "./ChangeFavoriteButton";
import color from "../enums/color";
import { ReactComponent as StarIcon } from '../assets/svg/star.svg';

const Card = styled.div`
  padding: 18px;
  width: calc(100% - (18px * 2));
  display: inline-grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  box-shadow: 0 1px 3px 0 ${color.SHADOW_LIGHT};
  background-color: ${color.BACKGROUND};
  margin-top: 10px;

  button {
    justify-self: end;
  }
`;

const AlbumTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: start;
`;

const Title = styled.h3`
  color: ${color.PRIMARY_TEXT};
  font-size: 18px;
  font-weight: normal;
  line-height: 1.33;
  letter-spacing: -0.66px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const ArtistName = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  letter-spacing: -0.44px;
  margin-top: 6px;
  margin-bottom: 6px;
  color: ${color.LIGHT_TEXT};
`;

const CoverWrap = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 25px;
`;

const Icon = styled(StarIcon)`
  position: absolute;
  top: -8px;
  right: -8px;
`;

const Cover = styled.img`
  display: block;
  height: 54px;
  width: 54px;
`;

const Release = styled.p`
  font-size: 14px;
  letter-spacing: -0.51px;
  color: ${color.LIGHT_TEXT};
`;

const Year = styled.span`
  letter-spacing: -0.51px;
  color: ${color.SECONDARY_TEXT};
`;

const Price = styled.p`
  font-size: 14px;
  letter-spacing: -0.51px;
  color: ${color.SECONDARY_TEXT};
`;

interface Props {
  imageUrl: string;
  title: string;
  releaseDate: Date;
  price: string;
  favorite: boolean;
  artist: Artist;
  onFavoriteClick: () => void;
}

const Album: React.FC<Props> = ({imageUrl, title, releaseDate, price, favorite, artist, onFavoriteClick}) => (
  <Card>
    <AlbumTitle>
      <CoverWrap>
        <Cover src={imageUrl} alt={`Cover for ${title} by ${artist.title}`}/>
        {favorite && <Icon />}
      </CoverWrap>
      <div>
        <Title>{title}</Title>
        <ArtistName to={`/artist/${artist.id}`}>{artist.title}</ArtistName>
      </div>
    </AlbumTitle>
    <Release>Released: <Year>{releaseDate.getFullYear()}</Year></Release>
    <Price>{price}</Price>
    <ChangeFavoriteButton favorite={favorite} onClick={onFavoriteClick} />
  </Card>
);

export default Album;
