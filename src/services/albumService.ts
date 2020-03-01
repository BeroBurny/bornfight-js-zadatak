import axios from 'axios';
import {AlbumDto} from "../types/dto/albumDto";

const instance = axios.create({
  baseURL: `${process.env.PUBLIC_URL}/albums`,
  timeout: 1000,
});

export default {
  getAlbums: async (page: number = 0, limit: number = 10, query: string = '') =>
    await instance.get<AlbumDto[]>(`?_page=${page}&_limit=${limit}&q=${query}`),

  getArtistAlbums: async (artistID: string) => await instance.get<AlbumDto[]>(`?artistId=${artistID}`),
}
