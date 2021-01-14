import Shoe from "./Shoe";

export default interface Cart {
  shoes: Array<Shoe>;
  date: Date;
  Total: number;
  street: string;
  houseNumber: string;
  paymentMethod: string;
  cityCode: number;
  city: string;
}
