import { setMultipleAttributes } from "./index.js";

export function updateProfile(profileData) {
    const div1 = document.createElement('div')
    div1.innerText = profileData.profile
    const div2 = div1.cloneNode(div1)
    setMultipleAttributes(div1, {'id': 'profile-id-main'})
    setMultipleAttributes(div2, {'id': 'profile-id', 'onClick': "removeFromHtml('profile-id')"})
    document.getElementById('profile-add-block').innerHTML = ''
    document.getElementById('profile-add-block').appendChild(div1)
    document.getElementById('div-values').innerHTML = ''
    document.getElementById('div-values').appendChild(div2)
}
