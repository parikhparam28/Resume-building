import { Profile } from "../models/profileModel.js";
import { updateProfile } from "../views/profileView.js";

let profileBlock;

export function addProfile()
{
    if(profileBlock === undefined)
        profileBlock = new Profile()
    profileBlock.addProfile()  
    updateProfile(profileBlock.profileData)
}