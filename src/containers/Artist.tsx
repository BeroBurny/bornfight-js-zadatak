import React, {useEffect, useState} from "react";
import {Album as AlbumType} from "../types/album";
import albumService from "../services/albumService";
import Album from "../components/Album";
import { useParams } from "react-router-dom";
import {useArtistContext} from "../contexts/Artist";

const Artist: React.FC = () => {
  const [albums, setAlbums] = useState<AlbumType[]>( []);
  const {getArtist} = useArtistContext();
  const {id} = useParams();

  const fetchData = () => {
    (async () => {
      const albumsResponse = await albumService.getArtistAlbums(id || '');
      setAlbums(albumsResponse);
    })();
  };
  useEffect(fetchData, [id]);

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

export default Artist;
