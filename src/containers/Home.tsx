import React, {useEffect, useState} from "react";
import albumService from "../services/albumService";
import Album from "../components/Album";
import {Album as AlbumType} from "../types/album";
import useQuery from "../hooks/useQuery";
import {useArtistContext} from "../contexts/Artist";

const Home: React.FC = () => {
  const [albums, setAlbums] = useState<AlbumType[]>( []);
  const {getArtist} = useArtistContext();

  const {limit, search} = useQuery();
  const fetchData = () => {
    (async () => {
      const albumsResponse = await albumService.getAlbums(limit, search);
      setAlbums(albumsResponse);
    })();
  };
  useEffect(fetchData, [limit, search]);

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
