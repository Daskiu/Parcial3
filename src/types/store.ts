import { Product } from "./recipes";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  products: Product[];
};

export enum SomeActions {
  "SAVE_RECIPE" = "SAVE_RECIPE",
}

export interface SaveRecipeAction {
  action: SomeActions.SAVE_RECIPE;
  payload: Product;
}

export type Actions = SaveRecipeAction;
