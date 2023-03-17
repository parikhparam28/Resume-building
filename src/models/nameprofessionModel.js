import { formDataValue as formData } from "../../modules/script.js";

export class NameProfession {
    constructor() {
        this.nameprofession = {}
    }

    addSkill() {
        this.nameprofession =  {
            name : formData.name.value,
            profession : formData.profession.value,
        }
    }
}