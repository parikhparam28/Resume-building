import { resume_details } from "./script.js";

export default function topicSelector() { 
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
        <button type="button" onclick="addSkill(this.form)">Add</button>
        <div class="slider" id="skillSlider">
            <input type="range" name="rangeSlider" min="0" max="10" step="1" value="0" oninput="rangeSliderValue.innerText = this.value">
            <span id="rangeSliderValue">0</span>
        </div>`
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
}


