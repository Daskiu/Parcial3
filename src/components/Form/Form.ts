import { dispatch } from "../../store";
import { saveRecipe } from "../../store/actions";
import { Product } from "../../types/recipes";

const userRecipes: Product = {
    name:"",
    ingredients:"",
    instructions:"",
    img:"",
}

class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const name = this.ownerDocument.createElement('input');
        const lName = this.ownerDocument.createElement('label');
        lName.textContent = "Nombre de la receta"
        name.addEventListener("change", (e: any)=>{
            userRecipes.name = e.target.value;
        })

        const ingredients = this.ownerDocument.createElement('input');
        const lIngredients = this.ownerDocument.createElement('label');
        lIngredients.textContent = "Ingredientes"
        ingredients.addEventListener("change", (e: any)=>{
            userRecipes.ingredients = e.target.value;
        })

        const instructions = this.ownerDocument.createElement('input');
        const lInstructions = this.ownerDocument.createElement('label');
        lInstructions.textContent = "Instrucciones"
        instructions.addEventListener("change", (e: any)=>{
            userRecipes.instructions = e.target.value;
        })

        const img = this.ownerDocument.createElement('input');
        const lImg = this.ownerDocument.createElement('label');
        lImg.textContent = "Imagen"
        img.type = "file";
        img.addEventListener("change", (e: any)=>{
            userRecipes.img = e.target.value;
        })

        const submit = this.ownerDocument.createElement('button');
        submit.textContent = "Submit";
        submit.addEventListener("click", async ()=>{
            console.log(userRecipes);
            dispatch(await saveRecipe(userRecipes))
        })

        this.shadowRoot?.appendChild(lName);
        this.shadowRoot?.appendChild(name);
        this.shadowRoot?.appendChild(lIngredients);
        this.shadowRoot?.appendChild(ingredients);
        this.shadowRoot?.appendChild(lInstructions);
        this.shadowRoot?.appendChild(instructions);
        this.shadowRoot?.appendChild(lImg);
        this.shadowRoot?.appendChild(img);
        this.shadowRoot?.appendChild(submit);
    }
}

customElements.define('app-form', Form)
export default Form;