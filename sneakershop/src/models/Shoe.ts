export default interface Shoe {
  id: number;
  amount?: number;
  title: string;
  description: string;
  color: string;
  sizes: Array<number>;
  model: string;
  iosModel: string;
  imgUrl: string;
  price: number;
}
