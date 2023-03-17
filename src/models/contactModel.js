import { formDataValue as formData } from "../../modules/script.js"

export class Contact {

    constructor() {
        this.contactData = {}
    }

    addContact() {
        this.contactData = {
            contactno : formData.contactno.value,
            email : formData.emailid.value,
            linkedin : formData.linkedin.value,
            country : formData.country.value,
            url : formData.weblink.value,
        }
    }

}