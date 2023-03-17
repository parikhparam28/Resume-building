import { Expertise } from "../models/expertiseModel.js";
import { updateExpertise } from "../views/expertiseView.js";

let expertiseBlock;

export function addExpertise()
{
    if(expertiseBlock === undefined)
        expertiseBlock = new Expertise()
    expertiseBlock.addExpertise()  
    updateExpertise(expertiseBlock.expertiseData)
}