import { formDataValue as formData } from "./script.js"
import { setMultipleAttributes } from "./script.js"

let education_count = 0

export default function addEducationDetail() {
    let degree = formData.degree_details.value
    let field = formData.field.value
    let grade = formData.grade.value
    let university = formData.university.value
    let start_year = formData.start_year.value
    let end_year = formData.end_year.value

    const educationDetailObject = {degree,field,grade,university,start_year,end_year}

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
    const div2 = div1.cloneNode(true)
    setMultipleAttributes(div1,{'id': 'education-' + education_count + '-main'})
    setMultipleAttributes(div2,{'id': 'education-' + education_count , 'onClick': `removeFromHtml('education-${education_count}')`})
    console.log(div2)
    document.getElementById('education-id').appendChild(div1)
    document.getElementById('div-values').appendChild(div2)
    education_count++;
}