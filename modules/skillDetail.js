import { formDataValue as formData } from "./script.js";
import { setMultipleAttributes } from "./script.js";

let skill_count = 0

export default function addSkill() {
    console.log("skill added");
    let data = formData.skill.value
    let sliderValue = formData.rangeSlider.value
    skill_count++
    const div1 = document.createElement("div")
    div1.innerHTML = `
        <li>${data}</li>
        <input type="range" min="0" max="10" value="${sliderValue}" style="" disabled>
    `
    console.log(sliderValue)
    const div2 = div1.cloneNode(true)
    setMultipleAttributes(div2, {'id': skill_count , 'onClick': "removeFromHtml(" + skill_count + ")"})
    setMultipleAttributes(div1, {'id': skill_count + '-main'})
    const skillsdiv = document.getElementById('skills-id')
    skillsdiv.appendChild(div1)
    const formsdiv = document.getElementById('div-values')
    formsdiv.appendChild(div2)
}