import React, {useContext, useEffect, useState} from "react";
import {Artist as ArtistType} from "../types/artist";
import artistService from "../services/artistService";

interface Context {
  artists: ArtistType[];
  getArtist:  (artistID: number) => ArtistType;
}

const ArtistContext = React.createContext<Context>({
  artists: [],
  getArtist: (id: number) => ({id: -1, title: 'Unknown'}),
});

export const useArtistContext = () => useContext(ArtistContext);

const Artist: React.FC = ({children}) => {
  const [artists, setArtists] = useState<ArtistType[]>([]);

  useEffect(() => {
    (async () => {
      const artistsResponse = await artistService.getArtists();
      setArtists(artistsResponse);
    })();
  }, []);

  const getArtist = (artistID: number): ArtistType => artists.find(({id}) => artistID === id) || {id: -1, title: 'Unknown'};

  return (
    <ArtistContext.Provider value={{artists, getArtist}}>
      {children}
    </ArtistContext.Provider>
  );
};

export default Artist;
