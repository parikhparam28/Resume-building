import { formDataValue as formData } from "../../modules/script.js";

export class Skill {
    constructor() {
        this.allSkills = []
    }

    addSkill() {
        const skill =  {
            skill : formData.skill.value,
            sliderValue : formData.rangeSlider.value,
            idProvider : this.allSkills.length,
        }
        this.allSkills.push(skill) 
    }
}