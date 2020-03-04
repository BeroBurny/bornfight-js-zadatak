import React, {useEffect, useState} from "react";
import albumService from "../services/albumService";
import Album from "../components/Album";
import artistService from "../services/artistService";
import {Artist} from "../types/artist";
import {Album as AlbumType} from "../types/album";

const Home: React.FC = () => {
  const [albums, setAlbums] = useState<AlbumType[]>( []);
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    (async () => {
      const albumsResponse = await albumService.getAlbums();
      const artistsResponse = await artistService.getArtists();

      setAlbums(albumsResponse);
      setArtists(artistsResponse);
    })();
  }, []);

  const getArtist = (artistID: number): Artist => artists.find(({id}) => artistID === id) || {id: -1, title: 'Unknown'};

  return (
    <div>
      {albums.map(({artistId, ...album}) => (
        <Album key={album.id} artist={getArtist(artistId)} {...album} />
      ))}
    </div>
  );
};

export default Home;
