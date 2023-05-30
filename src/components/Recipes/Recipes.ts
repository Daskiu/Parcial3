class Recipes extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const name = this.ownerDocument.createElement('h1');
        const ingredients = this.ownerDocument.createElement('h2');
        const instructions = this.ownerDocument.createElement('h2');
        const img = this.ownerDocument.createElement('img');

        this.shadowRoot?.appendChild(name);
        this.shadowRoot?.appendChild(ingredients);
        this.shadowRoot?.appendChild(instructions);
        this.shadowRoot?.appendChild(img);
    }
}

customElements.define('app-recipes', Recipes);
export default Recipes;