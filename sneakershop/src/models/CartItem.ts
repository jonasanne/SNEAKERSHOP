import Shoe from "./Shoe";

export default interface Cart {
  idbId?: number;
  cartItems: Array<>;
  Total?: number;
}
