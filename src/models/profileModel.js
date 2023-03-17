import { formDataValue as formData } from "../../modules/script.js";

export class Profile {
    
    constructor() {
        this.profileData = {}
    }

    addProfile() {   
        this.profileData = {
            profile: formData.profile.value
        }
    }

}