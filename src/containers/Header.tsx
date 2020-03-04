import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Content from "../components/Content";
import {Artist} from "../types/artist";
import artistService from "../services/artistService";
import {useRouteMatch} from "react-router-dom";

const HeaderStyle = styled.header`
  background-color: white;
  margin-bottom: 40px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.18);
`;

const Title = styled.h1`
  font-family: WorkSans;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.88px;
  margin: 0;
  padding: 35px 0;
`;

const Header: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    (async () => {
      const artistsResponse = await artistService.getArtists();
      setArtists(artistsResponse);
    })();
  }, []);

  const match = useRouteMatch<{id?: string}>('/artist/:id');
  const params = match ? match.params : {id: -1};
  const artist = artists.find(({id}) => id === Number(params.id)) || {id: -1, title: 'Unknown'};

  return (
    <HeaderStyle>
      <Content>
        <Title>{match ? artist.title : 'Album list'}</Title>
      </Content>
    </HeaderStyle>
  );
};

export default Header;
