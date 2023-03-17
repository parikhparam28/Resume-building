import { setMultipleAttributes } from "./index.js"

export function updateExpertise(expertiseData) {
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    setMultipleAttributes(div1, {'id': "expertise-value-id-main"}) 
    setMultipleAttributes(div2, {'id': "expertise-value-id" , 'onClick': "removeFromHtml('expertise-value-id')"})
    div1.innerHTML = expertiseData.expertise
    div2.innerHTML = expertiseData.expertise
    document.getElementById('div-values').innerHTML = ''
    if (document.getElementById('expertise-value-id-main'))
        document.getElementById('expertise-value-id-main').remove()
    document.getElementById('expertise-id').appendChild(div1)
    const formsdiv = document.getElementById('div-values')
    formsdiv.appendChild(div2)
}