import axios from 'axios';
import {AlbumDto} from "../types/dto/albumDto";
import {Album} from "../types/album";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/albums`,
  timeout: 1000,
});

const mapAlbumDtoToAlbum = (albumDto: AlbumDto) => ({...albumDto, releaseDate: new Date(albumDto.releaseDate)});

export default {
  getAlbums: async (limit: string = '10', query: string = '', page: string = '0'): Promise<Album[]> => {
    const response = await instance.get<AlbumDto[]>('', {params: {'_page': {page}, '_limit': limit, q: query}});
    return response.data.map(mapAlbumDtoToAlbum);
  },

  getArtistAlbums: async (artistID: string): Promise<Album[]> => {
    const response = await instance.get<AlbumDto[]>(`?artistId=${artistID}`);
    return response.data.map(mapAlbumDtoToAlbum);
  },

  setFavorite: async (albumID: number, favorite: boolean) => await instance.patch(`${albumID}`, {favorite}),
}
