import axios from 'axios';
import {ArtistDto} from "../types/dto/artistDto";
import {Artist} from "../types/artist";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/artists`,
  timeout: 1000,
});

export default {
 getArtists: async (): Promise<Artist[]> => await instance.get<ArtistDto[]>('').then(({data}) => data),

 getArtist: async (id: number): Promise<Artist> => await instance.get<ArtistDto>(`${id}`).then(({data}) => data),
}
