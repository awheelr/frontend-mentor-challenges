import { RecipeTime } from "@/types/recipe";

export class PreparationTime implements RecipeTime {
  constructor(public preparation: number, public cooking: number) {}

  get total(): number {
    return this.preparation + this.cooking;
  }
}
