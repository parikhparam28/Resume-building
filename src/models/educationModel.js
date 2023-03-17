import { formDataValue as formData } from "../../modules/script.js";

export class Education {
    
    constructor() {
        this.allEducation = []
    }

    addEducation() {
        const educationData = {
            degree : formData.degree_details.value,
            field : formData.field.value,
            grade : formData.grade.value,
            university : formData.university.value,
            start_year : formData.start_year.value,
            end_year : formData.end_year.value,
            idProvider : this.allEducation.length
        }
        this.allEducation.push(educationData)
    }

}