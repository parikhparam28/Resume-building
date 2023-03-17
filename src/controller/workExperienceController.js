import WorkExperience from "../models/workExperienceModel.js";

import { getBulletsInTransition, updateFormWorkExperience, updateResumeWorkExperience } from "../views/workExperienceView.js";

let workBlock;  

export function bulletControllerInForm() {
    if(workBlock === undefined)
        workBlock = new WorkExperience() 
    const bulletPoint = getBulletsInTransition(workBlock.bulletPointsInTransition.length-1)
    workBlock.addBulletPoints(bulletPoint)
}

export function experienceController() {
    if(workBlock === undefined)
        workBlock = new WorkExperience() 
    workBlock.addWorkExp()
    updateFormWorkExperience(workBlock.allWorkExperiences[workBlock.allWorkExperiences.length - 1])
    updateResumeWorkExperience(workBlock.allWorkExperiences[workBlock.allWorkExperiences.length - 1])
}


