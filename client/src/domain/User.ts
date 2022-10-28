import { Vegetable } from "./Vegetable";

export interface User {
  userName: string,
  email: string,
  vegetables: Vegetable[],
  lastWateringDay: string,
  favoriteVegetables: string[]
}
