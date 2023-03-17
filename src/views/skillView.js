import { setMultipleAttributes } from "./index.js"

function createDiv(skillData) {
    const div = document.createElement("div")
    div.innerHTML = `
        <li>${skillData.skill}</li>
        <input type="range" min="0" max="10" value="${skillData.sliderValue}" style="" disabled>
    `
    return div
}

export function updateResumeSkill(skillData) {
    const div = createDiv(skillData)
    setMultipleAttributes(div, {'id': skillData.idProvider + '-main'})
    const skillsdiv = document.getElementById('skills-id')
    skillsdiv.appendChild(div)
}

export function updateFormSkill(skillData) {
    const div = createDiv(skillData)
    setMultipleAttributes(div, {'id': skillData.idProvider , 'onClick': "removeFromHtml(" + skillData.idProvider + ")"})
    const formsdiv = document.getElementById('div-values')
    formsdiv.appendChild(div) 
}