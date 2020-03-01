import axios from 'axios';
import {ArtistDto} from "../types/dto/artistDto";

const instance = axios.create({
  baseURL: `${process.env.PUBLIC_URL}/artists`,
  timeout: 1000,
});

export default {
 getArtists: async () => await instance.get<ArtistDto[]>(''),

 getArtist: async (id: number) => await instance.get<ArtistDto>(`${id}`),
}
