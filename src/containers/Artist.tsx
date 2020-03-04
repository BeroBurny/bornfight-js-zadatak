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

  useEffect(() => {
    (async () => {
      const albumsResponse = await albumService.getArtistAlbums(id || '');
      const artistsResponse = await artistService.getArtists();

      setAlbums(albumsResponse);
      setArtists(artistsResponse);
    })();
  }, []);

  const getArtist = (artistID: number): ArtistType => artists.find(({id}) => artistID === id) || {id: -1, title: 'Unknown'};

  return (
    <div>
      {albums.map(({artistId, ...album}) => (
        <Album key={album.id} artist={getArtist(artistId)} {...album} />
      ))}
    </div>
  );
};

export default Artist;
