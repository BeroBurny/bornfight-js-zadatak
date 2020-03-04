import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ContentStyle from "../components/Content";
import {Artist} from "../types/artist";
import artistService from "../services/artistService";
import {useRouteMatch, useHistory} from "react-router-dom";
import useQuery from "../hooks/useQuery";
import createQueryString from "../utils/createQueryString";

const Content = styled(ContentStyle)`
  display: flex;
  justify-content: space-between;
`;

const HeaderStyle = styled.header`
  background-color: white;
  margin-bottom: 40px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.18);
`;

const Title = styled.h1`
  font-family: WorkSans;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.88px;
  margin: 0;
  padding: 35px 0;
`;

const Search = styled.input`
  border-radius: 4px;
  margin-top: 35px;
  height: 40px;
  width: 100%;
  max-width: 420px;
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
`;

const Header: React.FC = () => {
  const {search, ...restQueryParams} = useQuery();
  const history = useHistory();
  const [searchInput, setSearch] = useState(search || '');
  useEffect(() => {
    setSearch(search);
  }, [search]);
  const onSearchBlur = () => {
    history.push({
      search: createQueryString({search: searchInput, ...restQueryParams}),
    });
  };

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
        {!match && <Search
          type="search"
          value={searchInput}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={onSearchBlur}
          onKeyDown={(e) => {
            if(e.keyCode === 13) {
              // type for onKeyDown miss a blur function on event => target
              (e.target as any).blur();
            }
          }}
        />}
      </Content>
    </HeaderStyle>
  );
};

export default Header;
