import { NameProfession } from "../models/nameprofessionModel.js";
import { updateNameProfession } from "../views/nameprofessionView.js";

let nameprofessionBlock;

export function addNameProfession() {
    if(nameprofessionBlock === undefined)
        nameprofessionBlock = new NameProfession();
    nameprofessionBlock.addSkill()
    updateNameProfession(nameprofessionBlock.nameprofession)
} 