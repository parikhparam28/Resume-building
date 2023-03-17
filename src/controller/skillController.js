import { Skill } from "../models/skillModel.js";
import { updateResumeSkill, updateFormSkill } from "../views/skillView.js";

let skillBlock;

export function updateSkill() {
    if(skillBlock === undefined)
        skillBlock = new Skill()
    skillBlock.addSkill()
    console.log(skillBlock.allSkills[skillBlock.allSkills.length - 1])
    updateFormSkill(skillBlock.allSkills[skillBlock.allSkills.length - 1])
    updateResumeSkill(skillBlock.allSkills[skillBlock.allSkills.length - 1])
}