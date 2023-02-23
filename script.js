var resume_details = document.getElementById('resume-details');
var old_value = resume_details.value;
var skill_count = 0;
var education_count = 0;
var workexp_count = 0;
var workexp_listarr = []
var workexp_listcount = 0;
var flg = 1

var skillsArray = [];

var expertiseDetail;

var profileDetail;

var headerDetailObject = {
    name:null,
    profession:null
}

var contactDetailObject = {
    contactno:null,
    email:null,
    linkedin:null,
    country:null,
    url:null 
};

var educationDetailObject = {
    degree:null,
    field:null,
    grade:null,
    university:null,
    start_year:null,
    end_year:null
}

var workDetailObject = {
    companyname:null,
    month_year1:null,
    month_year2:null,
    work_summary:null
}

function previewResume() {
    formsdiv = document.getElementById("allforms-id")
    flg ? formsdiv.setAttribute("style", "display:none;") : formsdiv.setAttribute("style", "display:block;")
    flg ^= 1;
}

resume_details.addEventListener("change", () => {
    let current_value = resume_details.value;
    const form = document.createElement("form")
    form.setAttribute('id', "formId")
    if (current_value === "header") {
        form.setAttribute("class", "header")
        form.innerHTML = `<label for="name">Name</label>
        <input type="text" name="name" id="name-value">
        <label for="profession">Profession</label>
        <input type="text" name="profession" id="profession-value">
        <button type="button" onclick="addNameProfession(this.form)">Submit</button>`
    }
    else if (current_value === "image") {
        form.setAttribute("class", "image")
        form.innerHTML = `<input type="file" name="image" id="image-input" onclick="addImage()" accept="image/*">`
    }
    else if (current_value === "contact") {
        form.setAttribute("class", "contact")
        form.innerHTML = `<label for="contactno">Contact number</label>
        <input type="number" name="contactno" id="contactno-value">
        <label for="emailid">Email Id</label>
        <input type="email" name="emailid" id="emailid-value">
        <label for="linkedin">Linkedin</label>
        <input type="url" name="linkedin" id="linkedin-value">
        <label for="country">Country</label>
        <input type="text" name="country" id="country-value">
        <label for="weblink">URL</label>
        <input type="url" name="weblink" id="weblink-id">
        <button type="button" onclick="addContactDetail(this.form)">Submit</button>
        <button type="button" onclick="editContact()">Edit</button>`
    }
    else if (current_value === "education") {
        form.setAttribute("class", "education")
        form.innerHTML = `<div>Choose the degree below</div>
        <select class="education-degree" name="degree_details" id="degree-type">
        <option value="Bachelors Degree">Bachelors Degree</option>
        <option value="Masters Degree">Masters Degree</option>
        </select>
        <label for="field">Field</label>
        <input type="text" name="field" id="field-value">
        <label for="grade">Grade</label>
        <input type="text" name="grade" id="grade-value">
        <label for="university">University</label>
        <input type="text" name="university" id="university-value">
        <label for="start_year">Start Year</label>
        <input type="number" name="start_year" id="start-year-value" min="1900" max="2023" step="1" value="2023">
        <label for="end_year">End Year</label>
        <input type="number" name="end_year" id="end-year-value" min="1900" max="2023" step="1" value="2023"> 
        <button type="button" onclick="addEducationDetail(this.form)">Add</button>`
    }
    else if (current_value === "skills") {
        form.setAttribute("class", "skills")
        form.innerHTML = `<label for="skill">Add a skill</label>
        <input type="text" name="skill" id="skill-value">
        <button type="button" onclick="addSkill(this.form)">Add</button>`
    }
    else if (current_value === "expertise") {
        form.setAttribute("class", "expertise")
        form.innerHTML = `<textarea name="expertise" id="expertise" cols="30" rows="10" placeholder="Write Here" value=""></textarea>
        <button type="button" onclick="addExpertise(this.form)">Submit</button>
        <button type="button" onclick="editExpertise()">Edit</button>`
    }
    else if (current_value === "profile") {
        form.setAttribute("class", "profile")
        form.innerHTML = `<textarea name="profile" id="profile" cols="30" rows="10" placeholder="Write Here" value=""></textarea>
        <button type="button" onclick="addProfile(this.form)">Submit</button>
        <button type="button" onclick="editProfile()">Edit</button>`
    }
    else if (current_value === "work-experience") {
        form.setAttribute("class", "work-experience")
        form.innerHTML = `<label for="company">Company</label>
        <input type="text" name="company" id="company-value">
        <label for="month_year1">Work Start</label>
        <input type="month" name="month_year1" id="month-value1">
        <br>
        <label for="month_year2">Work End</label>
        <input type="month" name="month_year2" id="month-value2">
        <textarea name="work_summary" id="worksummaryId" cols="30" rows="10" placeholder="Type Here Work Summary"></textarea>
        <label for="bullet_point">Type below bulleted point</label>
        <input type="text" name="bullet_point" id="bulletpointId">
        <button type="button" onclick="addBulletedList()">Add</button>
        <ul id="bulletsId"></ul>
        <button type="button" onclick="addWorkExperience(this.form)">Add Experience</button>`
    }

    let formDisplay = document.getElementById("formDisplay")
    while (formDisplay.hasChildNodes())
        formDisplay.removeChild(formDisplay.firstChild)

    formDisplay.appendChild(form)

    let displaydiv = document.createElement('div')
    displaydiv.setAttribute("id", "div-values")
    formDisplay.appendChild(displaydiv)
    addResumeContent(displaydiv)
});

function removeFromHtml(Id) {
    console.log(Id)
    document.getElementById(Id).remove()
    if (document.getElementById(Id + '-main'))
        document.getElementById(Id + '-main').remove()
}


function setMultipleAttributes(element, attributeObj)
{
    for(let attribute in attributeObj)
        element.setAttribute(attribute,attributeObj[attribute])
}

function addImage() {     
    const imageInput = document.getElementById('image-input');
    const imagePreview = document.getElementById('image-preview')

    imageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            imagePreview.src = event.target.result;
        });
        reader.readAsDataURL(file);
    })
}

function addNameProfession(formData) {
    let name = formData.name.value
    let profession = formData.profession.value
    let h1 = document.createElement("h1")
    let h3 = document.createElement("h3")
    h1.setAttribute('id', "h1Id")
    h3.setAttribute('id', "h3Id")
    h1.innerHTML = name
    h3.innerHTML = profession
    const titlediv = document.getElementById('title-id')
    titlediv.removeChild(titlediv.children[0])
    titlediv.removeChild(titlediv.children[0])
    titlediv.appendChild(h1)
    titlediv.appendChild(h3)
}

function addContactDetail(formData) {
    let contactno = formData.contactno.value;
    let email = formData.emailid.value;
    let linkedin = formData.linkedin.value
    let country = formData.country.value
    let url = formData.weblink.value
    
    contactDetailObject = {contactno,email,linkedin,country,url}

    const spanContact = document.createElement('span')
    const spanCountry = document.createElement('span')
    const aEmail = document.createElement('a')
    const aLinkedin = document.createElement('a')
    const aUrl = document.createElement('a')

    setMultipleAttributes(spanContact,spanContactAttributes = {'id': 'contactno-id'})
    spanContact.innerHTML = ' ' + contactno
    setMultipleAttributes(spanCountry,spanCountryAttributes = {'id': 'country-id'})
    spanCountry.innerHTML = country
    setMultipleAttributes(aEmail,emailAttributes = {'id':'emailid-id', 'href': `mailto:${email}`})
    aEmail.innerHTML = ' ' + email
    setMultipleAttributes(aLinkedin,linkedinAttributes = {'id': 'linkedin-id', 'href': `${linkedin}`})
    aLinkedin.innerHTML = '  ' + linkedin
    setMultipleAttributes(aUrl, aUrlAttributes = {'id': 'url-id' , 'href': `${url}`})
    aUrl.innerHTML = url

    oldSpanContact = document.getElementById('contactno-id')
    oldSpanCountry = document.getElementById('country-id')
    oldAEmail = document.getElementById('emailid-id')
    oldALinkedin = document.getElementById('linkedin-id')
    oldAUrl = document.getElementById('url-id')

    oldSpanContact.parentNode.replaceChild(spanContact, oldSpanContact)
    oldSpanCountry.parentNode.replaceChild(spanCountry, oldSpanCountry)
    oldAEmail.parentNode.replaceChild(aEmail, oldAEmail)
    oldALinkedin.parentNode.replaceChild(aLinkedin, oldALinkedin)
    oldAUrl.parentNode.replaceChild(aUrl, oldAUrl)
}

function addEducationDetail(formData) {

    let degree = formData.degree_details.value
    let field = formData.field.value
    let grade = formData.grade.value
    let university = formData.university.value
    let start_year = formData.start_year.value
    let end_year = formData.end_year.value

    educationDetailObject = {degree,field,grade,university,start_year,end_year}

    const education_detail = ` 
        <div class="degree">${degree}</div>
        <div>
            <span class="degree-type">${field} </span>
        </div>
        <div class="grade">
            <span>Grade</span><span class="grade-num">${grade}</span>
        </div>
        <div class="university"> 
            <span>${university}</span> <span class="year">${start_year}-${end_year}</span>
        </div> `

    const div1 = document.createElement('div')
    div1.setAttribute('class', 'education-details')
    div1.innerHTML = education_detail
    div2 = div1.cloneNode(true)
    setMultipleAttributes(div1,div1Attributes = {'id': 'education-' + education_count + '-main'})
    setMultipleAttributes(div2,div2Attributes = {'id': 'education-' + education_count , 'onClick': `removeFromHtml('education-${education_count}')`})
    console.log(div2)
    document.getElementById('education-id').appendChild(div1)
    document.getElementById('div-values').appendChild(div2)
    education_count++;
}

function addSkill(formData) {
    let data = formData.skill.value
    skill_count++
    const list1 = document.createElement("li")
    const list2 = document.createElement("li")
    setMultipleAttributes(list1, list1Attributes = {'id': skill_count , 'onClick': "removeFromHtml(" + skill_count + ")"})
    setMultipleAttributes(list2, list2Attributes = {'id': skill_count + '-main'})
    list1.innerHTML = data
    list2.innerHTML = data
    const skillsdiv = document.getElementById('skills-id')
    skillsdiv.appendChild(list2)
    const formsdiv = document.getElementById('div-values')
    formsdiv.appendChild(list1)
}

function addExpertise(formData) {

    let data = formData.expertise.value
    expertiseDetail = data
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    setMultipleAttributes(div1,div1Attributes = {'id': "expertise-value-id-main"}) 
    setMultipleAttributes(div2,div2Attributes = {'id': "expertise-value-id" , 'onClick': "removeFromHtml('expertise-value-id')"})
    div1.innerHTML = data
    div2.innerHTML = data
    document.getElementById('div-values').innerHTML = ''
    if (document.getElementById('expertise-value-id-main'))
        document.getElementById('expertise-value-id-main').remove()
    document.getElementById('expertise-id').appendChild(div1)
    const formsdiv = document.getElementById('div-values')
    formsdiv.appendChild(div2)
}

function addProfile(formData) {
    let data = formData.profile.value
    profileDetail = data
    const div1 = document.createElement('div')
    div1.innerText = data
    div2 = div1.cloneNode(div1)
    setMultipleAttributes(div1,div1Attributes = {'id': 'profile-id-main'})
    setMultipleAttributes(div2,div2Attributes = {'id': 'profile-id', 'onClick': "removeFromHtml('profile-id')"})
    document.getElementById('profile-add-block').innerHTML = ''
    document.getElementById('profile-add-block').appendChild(div1)
    document.getElementById('div-values').innerHTML = ''
    document.getElementById('div-values').appendChild(div2)
}

function addBulletedList() {
    let data = document.getElementById('bulletpointId').value
    skillsArray.push(data)
    workexp_listarr.push(data)
    const li = document.createElement('li')
    setMultipleAttributes(li,liAttributes = {'id': 'workexp_bl_' + workexp_listcount , 'onClick': `removeFromHtml('workexp_bl_${workexp_listcount}')`})
    li.innerHTML = data
    document.getElementById('bulletsId').appendChild(li)
    workexp_listcount++
}

function addWorkExperience(formData) {
    let companyname = formData.company.value
    let month_year1 = formData.month_year1.value
    let month_year2 = formData.month_year2.value
    let work_summary = formData.work_summary.value

    workDetailObject = {companyname,month_year1,month_year2,work_summary}

    workexp_count++;
    workexp_listcount = 0;

    const html = `
        <div class="sub-block-title">Job title / Position</div>
        <div class="meta-data"><span>${companyname}</span><span class="year">${month_year1} - ${month_year2}</span></div>
        <div class="content-summary">${work_summary}</div>
        <br id="content-summary-${workexp_count}">`
    let div1 = document.createElement('div')
    div1.innerHTML = html
    div2 = div1.cloneNode(true)
    setMultipleAttributes(div1,div1Attributes = {'id': 'workdiv' + workexp_count + '-main'})
    setMultipleAttributes(div2,div2Attributes = {'id': 'workdiv' + workexp_count , 'onClick': `removeFromHtml('workdiv${workexp_count}')`})
    let workexpdiv = document.getElementById('workexperienceId')
    workexpdiv.appendChild(div1)
    let formsdiv = document.getElementById('div-values')
    formsdiv.appendChild(div2)
    document.getElementById('bulletsId').innerHTML = ''

    for (let i = 0; i < workexp_listarr.length; i++) {
        let li1 = document.createElement('li')
        li1.innerHTML = workexp_listarr[i]
        li2 = li1.cloneNode(true)
        const workexpsubdiv = document.getElementById('workdiv' + workexp_count)
        const workexpsubdivmain = document.getElementById('workdiv' + workexp_count + '-main')
        workexpsubdivmain.insertBefore(li1, workexpsubdivmain.children[i + 3])
        workexpsubdiv.insertBefore(li2, workexpsubdiv.children[i + 3])
    }
    workexp_listarr.length = 0
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

function addResumeContent(displaydiv) {
    current_value = resume_details.value
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

function editContact() {
    const contactDetails = document.getElementById('contactId')
    const formDetails = document.getElementById('formId')

    const numstring = contactDetails.children[1].children[0].innerText
    formDetails.children[1].value = parseInt(numstring.substring(1))
    formDetails.children[3].value = contactDetails.children[2].children[0].innerText
    formDetails.children[5].value = contactDetails.children[3].children[0].innerText
    formDetails.children[7].value = contactDetails.children[4].children[1].innerText
    formDetails.children[9].value = contactDetails.children[5].children[1].innerText
}

function editProfileExpertiseText(resumeMainId,formTopic)
{
    if(document.getElementById(resumeMainId))
    {
        const content = document.getElementById(resumeMainId).innerText
        document.getElementById(formTopic).innerText = content    
    }
}

function editExpertise() {
    editProfileExpertiseText('expertise-value-id','expertise')
}

function editProfile() {
    editProfileExpertiseText('profile-id-main','profile')
}























