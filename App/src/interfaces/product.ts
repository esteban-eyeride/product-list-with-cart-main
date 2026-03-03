import { Images } from "./images"
export interface Product {
  "image": Images;
  "name": string,
  "category": string,
  "price": number,
  "quantity"?: number,
}
