export interface Album {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
  releaseDate: Date;
  artistId: number;
  favorite: boolean;
}
