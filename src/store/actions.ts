import { Product } from "../types/recipes"
import { Actions, SomeActions } from "../types/store"
import firebase from "../utils/firebase"

export const saveRecipe = async (product: Product): Promise:<Actions>  => {
     await firebase.saveRecipesInDB(product);
    return{
        action:SomeActions.SAVE_RECIPE,
        payload:product,
    }
}