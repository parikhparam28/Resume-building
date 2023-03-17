import { setMultipleAttributes } from "./index.js"

function createDiv(educationData) {
    const education_detail = ` 
        <div class="degree">${educationData.degree}</div>
        <div>
            <span class="degree-type">${educationData.field} </span>
        </div>
        <div class="grade">
            <span>Grade</span><span class="grade-num">${educationData.grade}</span>
        </div>
        <div class="university"> 
            <span>${educationData.university}</span> <span class="year">${educationData.start_year}-${educationData.end_year}</span>
        </div> `

    const div = document.createElement('div')    
    div.setAttribute('class', 'education-details')
    div.innerHTML = education_detail
    return div
}

export function updateResumeEducation(educationData) { 
    const div = createDiv(educationData)
    setMultipleAttributes(div,{'id': 'education-' + educationData.idProvider + '-main'})
    document.getElementById('education-id').appendChild(div)
}

export function updateFormEducation(educationData) {
    const div = createDiv(educationData)
    setMultipleAttributes(div,{'id': 'education-' + educationData.idProvider , 'onClick': `removeFromHtml('education-${educationData.idProvider}')`})
    document.getElementById('div-values').appendChild(div)
}





