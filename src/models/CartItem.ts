import Shoe from "./Shoe";

export default interface CartItem {
  idbId?: number;
  id: number;
  shoe: Shoe;
  price?: number;
  amount?: number;
}


