import React, {useEffect, useState} from "react";
import albumService from "../services/albumService";
import Album from "../components/Album";
import artistService from "../services/artistService";
import {Artist} from "../types/artist";
import {Album as AlbumType} from "../types/album";
import useQuery from "../hooks/useQuery";

const Home: React.FC = () => {
  const [albums, setAlbums] = useState<AlbumType[]>( []);
  const [artists, setArtists] = useState<Artist[]>([]);

  const {limit, search} = useQuery();
  const fetchData = () => {
    (async () => {
      const albumsResponse = await albumService.getAlbums(limit, search);
      const artistsResponse = await artistService.getArtists();

      setAlbums(albumsResponse);
      setArtists(artistsResponse);
    })();
  };
  useEffect(fetchData, [limit, search]);

  const getArtist = (artistID: number): Artist => artists.find(({id}) => artistID === id) || {id: -1, title: 'Unknown'};

  const onFavoriteClick = (id: number, favorite: boolean) => () => {
      albumService.setFavorite(id, !favorite).then(() => fetchData());
  };

  return (
    <div>
      {albums.map(({artistId, id, ...album}) => (
        <Album key={id} artist={getArtist(artistId)} onFavoriteClick={onFavoriteClick(id, album.favorite)} {...album} />
      ))}
    </div>
  );
};

export default Home;
