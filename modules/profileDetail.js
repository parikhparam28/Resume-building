import { formDataValue as formData } from "./script.js"
import { setMultipleAttributes } from "./script.js"

let profileDetail;

export default function addProfile() {
    let data = formData.profile.value
    profileDetail = data
    const div1 = document.createElement('div')
    div1.innerText = data
    const div2 = div1.cloneNode(div1)
    setMultipleAttributes(div1, {'id': 'profile-id-main'})
    setMultipleAttributes(div2, {'id': 'profile-id', 'onClick': "removeFromHtml('profile-id')"})
    document.getElementById('profile-add-block').innerHTML = ''
    document.getElementById('profile-add-block').appendChild(div1)
    document.getElementById('div-values').innerHTML = ''
    document.getElementById('div-values').appendChild(div2)
}