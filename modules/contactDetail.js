import { formDataValue as formData} from "./script.js";
import { setMultipleAttributes } from "./script.js";
import { replaceMultipleChild } from "./script.js";

export function editContact() {
    const contactDetails = document.getElementById('contactId')
    const formDetails = document.getElementById('formId')

    const numstring = contactDetails.children[1].children[0].innerText
    formDetails.children[1].value = parseInt(numstring.substring(1))
    formDetails.children[3].value = contactDetails.children[2].children[0].innerText
    formDetails.children[5].value = contactDetails.children[3].children[0].innerText
    formDetails.children[7].value = contactDetails.children[4].children[1].innerText
    formDetails.children[9].value = contactDetails.children[5].children[1].innerText
}

export function addContactDetail() {
    let contactno = formData.contactno.value;
    let email = formData.emailid.value;
    let linkedin = formData.linkedin.value
    let country = formData.country.value
    let url = formData.weblink.value
    
    const contactDetailObject = {contactno,email,linkedin,country,url}

    const spanContact = document.createElement('span')
    const spanCountry = document.createElement('span')
    const aEmail = document.createElement('a')
    const aLinkedin = document.createElement('a')
    const aUrl = document.createElement('a')

    setMultipleAttributes(spanContact, {'id': 'contactno-id'})
    spanContact.innerHTML = ' ' + contactno
    setMultipleAttributes(spanCountry, {'id': 'country-id'})
    spanCountry.innerHTML = country
    setMultipleAttributes(aEmail, {'id':'emailid-id', 'href': `mailto:${email}`})
    aEmail.innerHTML = ' ' + email
    setMultipleAttributes(aLinkedin, {'id': 'linkedin-id', 'href': `${linkedin}`})
    aLinkedin.innerHTML = '  ' + linkedin
    setMultipleAttributes(aUrl, {'id': 'url-id' , 'href': `${url}`})
    aUrl.innerHTML = url    

    replaceMultipleChild( ['contactno-id','country-id','emailid-id','linkedin-id','url-id'] , [spanContact,spanCountry,aEmail,aLinkedin,aUrl])
}