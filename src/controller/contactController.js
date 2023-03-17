import { Contact } from "../models/contactModel.js";
import { editContact, updateContact } from "../views/contactView.js";

let contactBlock;

export function contactController() {
    if(contactBlock === undefined)
        contactBlock = new Contact()
    contactBlock.addContact()
    updateContact(contactBlock.contactData)  
}

export function contactEdit() {
    editContact() 
}