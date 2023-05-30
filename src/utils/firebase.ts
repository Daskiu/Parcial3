import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Product } from "../types/recipes";


const app = initializeApp(firebaseConfig);

const saveRecipesInDB = async (product: Product) => {
    try {
        await addDoc(collection(db, "products"), product);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export default {saveRecipesInDB};

const db = getFirestore(app);