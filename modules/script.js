import topicSelector from "./selector.js";
import addImage from "./uploadImage.js";
import addNameProfession from "./nameProfession.js";
import { addContactDetail, editContact } from "./contactDetail.js";
import addEducationDetail from "./educationDetail.js";
import addSkill from "./skillDetail.js";
import addExpertise from "./expertiseDetail.js";
import addProfile from "./profileDetail.js";
import { addWorkExperience, addBulletedList } from "./workExperienceDetail.js";

export let resume_details = document.getElementById('resume-details');
export let formDataValue;

let old_value = resume_details.value;

let flg = 1

let headerDetailObject = {
    name:null,
    profession:null
}

let contactDetailObject = {
    contactno:null,
    email:null,
    linkedin:null,
    country:null,
    url:null 
};

let educationDetailObject = {
    degree:null,
    field:null,
    grade:null,
    university:null,
    start_year:null,
    end_year:null
}

let workDetailObject = {
    companyname:null,
    month_year1:null,
    month_year2:null,
    work_summary:null
}

window.previewResume = ()=> {
    const formsdiv = document.getElementById("allforms-id")
    flg ? formsdiv.setAttribute("style", "display:none;") : formsdiv.setAttribute("style", "display:block;")
    flg ^= 1;
}

resume_details.addEventListener("change", () => {
    topicSelector()
});

window.removeFromHtml = (Id) => {
    console.log(Id)
    document.getElementById(Id).remove()
    if (document.getElementById(Id + '-main'))
        document.getElementById(Id + '-main').remove()
}


export function setMultipleAttributes(element, attributeObj)
{
    for(let attribute in attributeObj)
        element.setAttribute(attribute,attributeObj[attribute])
}

window.addImage = () => {     
    addImage()
}

window.addNameProfession = (formData) => {
    formDataValue = formData 
    addNameProfession()
}

export function replaceMultipleChild(elementIds, newElements)
{
    for(let i=0; i<elementIds.length; i++)
    {
        const oldElement = document.getElementById(elementIds[i])
        oldElement.parentNode.replaceChild(newElements[i],oldElement)
    }
}

window.addContactDetail = (formData) => {
    formDataValue = formData
    addContactDetail()
}

window.addEducationDetail = (formData) => {
    formDataValue = formData
    addEducationDetail()
}

window.addSkill = (formData) => {
    formDataValue = formData
    addSkill() 
}

window.addExpertise = (formData) => {
    formDataValue = formData
    addExpertise()
}

window.addProfile = (formData) => {
    formDataValue = formData
    addProfile()
}

window.addBulletedList = () => {
    addBulletedList()
}

window.addWorkExperience = (formData) => {
    formDataValue = formData
    addWorkExperience()
}

function deepNodeCreation(elementBlock, Id, displaydiv)
{
    const newElementBlock = elementBlock.cloneNode(true)
    newElementBlock.setAttribute('onClick', `removeFromHtml("${Id}")`)
    newElementBlock.setAttribute('id', `${Id}`)
    displaydiv.appendChild(newElementBlock)
}

function getId(block) {
    let id = block.getAttribute("id");
    const stringsize = id.length;
    let newId = id.substring(0, stringsize - 5);
    return newId;
}

function accessEducationBlock(displaydiv) {
    const educationBlock = document.getElementById("education-id");
    const elementcount = educationBlock.childElementCount;
    for (let i = 1; i < elementcount; i++) {
        const educationDetail = educationBlock.children[i]
        const newId = getId(educationDetail)
        deepNodeCreation(educationDetail,newId,displaydiv)
    }
}

function accessSkillsBlock(displaydiv) {
    const skillsBlock = document.getElementById("skills-id");
    const elementcount = skillsBlock.childElementCount;
    for (let i = 1; i < elementcount; i++) {
        const listElement = skillsBlock.children[i];
        const newId = getId(listElement)
        deepNodeCreation(listElement,newId,displaydiv)
    }
}

function accessExpertiseBlock(displaydiv) {
    if(document.getElementById('expertise-value-id-main'))
    {
        const expertiseBlock = document.getElementById('expertise-value-id-main')
        deepNodeCreation(expertiseBlock,"expertise-value-id",displaydiv)
    }
}

function accessProfileBlock(displaydiv) {
    if(document.getElementById('profile-id-main'))
    {
        const profileBlock = document.getElementById('profile-id-main')
        deepNodeCreation(profileBlock,"profile-id",displaydiv)
    }
}

function accessWorkBlock(displaydiv) {
    const workBlock = document.getElementById("workexperienceId");
    const elementcount = workBlock.childElementCount;
    console.log(elementcount)
    for (let i = 1; i < elementcount; i++) {
        const workDetail = workBlock.children[i]
        const newId = getId(workDetail)
        deepNodeCreation(workDetail,newId,displaydiv)
    }
}

window.addResumeContent = (displaydiv) => {
    const current_value = resume_details.value
    if (current_value === "education")
        accessEducationBlock(displaydiv)
    else if (current_value === "skills")
        accessSkillsBlock(displaydiv)
    else if (current_value === "expertise")
        accessExpertiseBlock(displaydiv)
    else if (current_value === "profile")
        accessProfileBlock(displaydiv)
    else if (current_value === "work-experience")
        accessWorkBlock(displaydiv)
}

window.editContact = () => {
    editContact()
}

window.editProfileExpertiseText = (resumeMainId,formTopic) => 
{
    if(document.getElementById(resumeMainId))
    {
        const content = document.getElementById(resumeMainId).innerText
        document.getElementById(formTopic).innerText = content    
    }
}
 
window.editExpertise = () => {
    editProfileExpertiseText('expertise-value-id','expertise')
}

window.editProfile = () => {
    editProfileExpertiseText('profile-id-main','profile')
}







