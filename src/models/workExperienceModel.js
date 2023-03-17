import { formDataValue as formData } from "../../modules/script.js"

export default class WorkExperience {

    constructor() {
        this.allWorkExperiences = []
        this.bulletPointsInTransition = []
    }

    addWorkExp() {
        const workExperience = {
            companyname : formData.company.value,
            month_year1 : formData.month_year1.value,
            month_year2 : formData.month_year2.value,
            work_summary : formData.work_summary.value, 
            bulletPointsInTransition: this.bulletPointsInTransition
        }
        this.allWorkExperiences.push(workExperience)
        this.bulletPointsInTransition = []
    }
    
    addBulletPoints(bulletPoint) {
        if(bulletPoint === undefined)
            return;
        this.bulletPointsInTransition.push(bulletPoint)
    }

}



