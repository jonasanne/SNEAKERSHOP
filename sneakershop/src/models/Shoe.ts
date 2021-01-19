export default interface Shoe {
  id: number;
  idbId?: number;
  title: string;
  description: string;
  color: string;
  sizes?: Array<number>;
  model: string;
  iosModel: string;
  imgUrl: string;
  price: number;
  amount?: string;
  selectedSize?: number;
}
