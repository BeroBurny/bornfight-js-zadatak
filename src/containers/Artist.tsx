import React, {useEffect, useState} from "react";
import {Album as AlbumType} from "../types/album";
import {Artist as ArtistType} from "../types/artist";
import albumService from "../services/albumService";
import artistService from "../services/artistService";
import Album from "../components/Album";
import { useParams } from "react-router-dom";

const Artist: React.FC = () => {
  const [albums, setAlbums] = useState<AlbumType[]>( []);
  const [artists, setArtists] = useState<ArtistType[]>([]);
  const {id} = useParams();

  const fetchData = () => {
    (async () => {
      const albumsResponse = await albumService.getArtistAlbums(id || '');
      const artistsResponse = await artistService.getArtists();

      setAlbums(albumsResponse);
      setArtists(artistsResponse);
    })();
  };
  useEffect(fetchData, [id]);

  const getArtist = (artistID: number): ArtistType => artists.find(({id}) => artistID === id) || {id: -1, title: 'Unknown'};

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
