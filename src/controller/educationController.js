import { Education } from "../models/educationModel.js";
import { updateResumeEducation, updateFormEducation } from "../views/educationView.js";

let educationBlock;

export function updateEducation() {
    if(educationBlock === undefined)
        educationBlock = new Education()  
    educationBlock.addEducation()  
    console.log(educationBlock.allEducation[educationBlock.allEducation.length - 1])  
    updateFormEducation(educationBlock.allEducation[educationBlock.allEducation.length - 1])  
    updateResumeEducation(educationBlock.allEducation[educationBlock.allEducation.length - 1])   
} 