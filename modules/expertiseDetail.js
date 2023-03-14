import { formDataValue as formData } from "./script.js"
import { setMultipleAttributes } from "./script.js"

let expertiseData;

export default function addExpertise() {
    let data = formData.expertise.value
    expertiseData = data
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    setMultipleAttributes(div1, {'id': "expertise-value-id-main"}) 
    setMultipleAttributes(div2, {'id': "expertise-value-id" , 'onClick': "removeFromHtml('expertise-value-id')"})
    div1.innerHTML = data
    div2.innerHTML = data
    document.getElementById('div-values').innerHTML = ''
    if (document.getElementById('expertise-value-id-main'))
        document.getElementById('expertise-value-id-main').remove()
    document.getElementById('expertise-id').appendChild(div1)
    const formsdiv = document.getElementById('div-values')
    formsdiv.appendChild(div2)
}