import { setMultipleAttributes } from "./index.js"

function updateBulletedList(bulletPoint, workexp_listcount) {
    const li = document.createElement('li') 
    setMultipleAttributes(li,{'id': 'workexp_bl_' + workexp_listcount , 'onClick': `removeFromHtml('workexp_bl_${workexp_listcount}')`})
    li.innerHTML = bulletPoint  
    document.getElementById('bulletsId').appendChild(li)  
}

export function getBulletsInTransition(workexp_listcount) {
    const bulletPoint = document.getElementById('bulletpointId').value
    updateBulletedList(bulletPoint, workexp_listcount)
    return bulletPoint
}

function updateBulletsInExpBlock( bulletPointsInTransition, Id) {
    for (let i = 0; i < bulletPointsInTransition.length; i++) {
        let li = document.createElement('li')
        li.innerHTML = bulletPointsInTransition[i]
        const experienceBlock = document.getElementById(Id)
        experienceBlock.insertBefore(li, experienceBlock.children[i + 3])
    }
}

function createExpDiv(companyname, month_year1, month_year2, work_summary, workexp_count) {
    document.getElementById('bulletsId').innerHTML = ''
    const html = `
        <div class="sub-block-title">Job title / Position</div>
        <div class="meta-data"><span>${companyname}</span><span class="year">${month_year1} - ${month_year2}</span></div>
        <div class="content-summary">${work_summary}</div>
        <br id="content-summary-${workexp_count}">`
    let div = document.createElement('div')
    div.innerHTML = html
    return div 
} 

export function updateFormWorkExperience(workExperienceData) {
    console.log(workExperienceData)
    const { companyname, month_year1, month_year2, work_summary, bulletPointsInTransition } = workExperienceData
    const div = createExpDiv(companyname, month_year1, month_year2, work_summary, bulletPointsInTransition.length)
    setMultipleAttributes(div, {'id': 'workdiv' + bulletPointsInTransition.length , 'onClick': `removeFromHtml('workdiv${bulletPointsInTransition.length}')`})
    let formsdiv = document.getElementById('div-values')
    formsdiv.appendChild(div)
    updateBulletsInExpBlock(bulletPointsInTransition , 'workdiv' + bulletPointsInTransition.length)
}

export function updateResumeWorkExperience(workExperienceData) {
    const { companyname, month_year1,month_year2,work_summary, bulletPointsInTransition } = workExperienceData
    const div = createExpDiv(companyname, month_year1, month_year2, work_summary, bulletPointsInTransition.length)
    setMultipleAttributes(div, {'id': 'workdiv' + bulletPointsInTransition.length + '-main'})
    let workexpdiv = document.getElementById('workexperienceId')
    workexpdiv.appendChild(div) 
    updateBulletsInExpBlock(bulletPointsInTransition , 'workdiv' + bulletPointsInTransition.length + '-main')
}





