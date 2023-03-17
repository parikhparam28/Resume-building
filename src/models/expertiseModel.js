import { formDataValue as formData } from "../../modules/script.js";

export class Expertise {
    
    constructor() {
        this.expertiseData = {}
    }

    addExpertise() {   
        this.expertiseData = {
            expertise: formData.expertise.value
        }
    }

}