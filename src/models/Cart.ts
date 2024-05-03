import Shoe from "./Shoe";

export default interface Cart {
  idbId?: number;
  id: number;
  shoes: Array<Shoe>;
  date: string;
  Total?: number;
}
