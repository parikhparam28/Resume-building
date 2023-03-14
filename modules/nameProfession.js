import { formDataValue as formData} from "./script.js"

export default function addNameProfession() {
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