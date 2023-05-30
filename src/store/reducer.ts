import { Actions, AppState, SomeActions } from "../types/store";

export const reducer = (actions: Actions, state: AppState) => {
    const {action, payload} = actions;
    switch (action) {
        case SomeActions.SAVE_RECIPE:
            state.products = [...state.products, payload]
            return state;
    
        default:
            return state;
    }
}