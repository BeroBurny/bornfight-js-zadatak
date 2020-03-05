import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ContentStyle from "../components/Content";
import {useRouteMatch, useHistory, Route} from "react-router-dom";
import useQuery from "../hooks/useQuery";
import createQueryString from "../utils/createQueryString";
import {useArtistContext} from "../contexts/Artist";
import color from "../enums/color";
import SearchStyle from "../components/SearchInput";

const Content = styled(ContentStyle)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  
  @media screen and (max-width: 600px) {
    max-width: 100%;
    flex-direction: column;
  }
`;

const Search = styled(SearchStyle)`
  margin-top: 35px;
  
  @media screen and (max-width: 600px) {
    margin-top: -20px;
    margin-bottom: 10px;
  }
`;

const HeaderStyle = styled.header`
  background-color: white;
  margin-bottom: 40px;
  box-shadow: 0 1px 4px 0 ${color.SHADOW_LIGHT};
`;

const Title = styled.h1`
  font-size: 24px;
  color: ${color.PRIMARY_TEXT};
  letter-spacing: -0.88px;
  margin: 0;
  padding: 35px 0;
`;

const Header: React.FC = () => {
  const {search, ...restQueryParams} = useQuery();
  const history = useHistory();
  const [searchInput, setSearch] = useState(search || '');
  useEffect(() => {
    setSearch(search || '');
  }, [search]);
  const onSearchBlur = () => {
    history.push({search: createQueryString({search: searchInput, ...restQueryParams})});
  };

  const {getArtist} = useArtistContext();
  const match = useRouteMatch<{id?: string}>('/artist/:id');
  const params = match ? match.params : {id: -1};
  const artist = getArtist(Number(params.id));

  return (
    <HeaderStyle>
      <Content>
        <Title>{match ? artist.title : 'Album list'}</Title>
        <Route path="/" exact>
          <Search
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearch(e.target.value)}
            onBlur={onSearchBlur}
            onKeyDown={(e) => {
              if(e.keyCode === 13) {
                // type for onKeyDown miss a blur function on event => target
                (e.target as any).blur();
              }
            }}
          />
        </Route>
      </Content>
    </HeaderStyle>
  );
};

export default Header;
