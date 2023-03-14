import { formDataValue as formData, setMultipleAttributes } from "./script.js"

let workexp_count = 0;
let workexp_listcount = 0;
let workexp_listarr = [];
let skillsArray = [];

export function addBulletedList() {
    let data = document.getElementById('bulletpointId').value
    skillsArray.push(data)
    workexp_listarr.push(data)
    const li = document.createElement('li')
    setMultipleAttributes(li,liAttributes = {'id': 'workexp_bl_' + workexp_listcount , 'onClick': `removeFromHtml('workexp_bl_${workexp_listcount}')`})
    li.innerHTML = data
    document.getElementById('bulletsId').appendChild(li)
    workexp_listcount++
}

export function addWorkExperience() {
    let companyname = formData.company.value
    let month_year1 = formData.month_year1.value
    let month_year2 = formData.month_year2.value
    let work_summary = formData.work_summary.value

    const workDetailObject = {companyname,month_year1,month_year2,work_summary}

    workexp_count++;     
    workexp_listcount = 0;

    const html = `
        <div class="sub-block-title">Job title / Position</div>
        <div class="meta-data"><span>${companyname}</span><span class="year">${month_year1} - ${month_year2}</span></div>
        <div class="content-summary">${work_summary}</div>
        <br id="content-summary-${workexp_count}">`
    let div1 = document.createElement('div')
    div1.innerHTML = html
    const div2 = div1.cloneNode(true)
    setMultipleAttributes(div1, {'id': 'workdiv' + workexp_count + '-main'})
    setMultipleAttributes(div2, {'id': 'workdiv' + workexp_count , 'onClick': `removeFromHtml('workdiv${workexp_count}')`})
    let workexpdiv = document.getElementById('workexperienceId')
    workexpdiv.appendChild(div1)
    let formsdiv = document.getElementById('div-values')
    formsdiv.appendChild(div2)
    document.getElementById('bulletsId').innerHTML = ''

    for (let i = 0; i < workexp_listarr.length; i++) {
        let li1 = document.createElement('li')
        li1.innerHTML = workexp_listarr[i]
        li2 = li1.cloneNode(true)
        const workexpsubdiv = document.getElementById('workdiv' + workexp_count)
        const workexpsubdivmain = document.getElementById('workdiv' + workexp_count + '-main')
        workexpsubdivmain.insertBefore(li1, workexpsubdivmain.children[i + 3])
        workexpsubdiv.insertBefore(li2, workexpsubdiv.children[i + 3])
    }
    workexp_listarr.length = 0
}