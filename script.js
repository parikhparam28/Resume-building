let resume_details = document.getElementById('resume-details');
let old_value = resume_details.value;
let skill_count = 0;
let education_count = 0;
let workexp_count = 0;
let workexp_listarr = []
let workexp_listcount = 0;

resume_details.addEventListener("change",() => {
    let current_value = resume_details.value;
    document.getElementsByClassName(current_value)[0].classList.remove('form-hide')
    document.getElementsByClassName(old_value)[0].classList.add('form-hide')
    workexp_listarr.length = 0 
    old_value = current_value
    document.getElementById('div-values').innerHTML = ''
});  

function removeFromHtml(Id)
{
    document.getElementById(Id).remove()
    if(document.getElementById(Id + '-main'))
        document.getElementById(Id + '-main').remove()
}


const imageInput = document.getElementById('image-input');
const imagePreview = document.getElementById('image-preview')

imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        imagePreview.src = event.target.result;
    });
    reader.readAsDataURL(file);      
})


function addNameProfession(formData)
{
    let name = formData.name.value
    let profession = formData.profession.value
    let h1 = document.createElement("h1")
    let h3 = document.createElement("h3")
    h1.setAttribute('id',"h1Id")
    h3.setAttribute('id',"h3Id")
    h1.innerHTML = name
    h3.innerHTML = profession
    const titlediv = document.getElementById('title-id')
    titlediv.removeChild(titlediv.children[0])
    titlediv.removeChild(titlediv.children[0]) 
    titlediv.appendChild(h1)
    titlediv.appendChild(h3)
}

function addContactDetail(formData) {
    let contactno = formData.contactno.value;
    let email = formData.emailid.value;
    let linkedin = formData.linkedin.value
    let country = formData.country.value
    let url = formData.weblink.value

    const spancontact = document.createElement('span')
    const spancountry = document.createElement('span')
    const a_email = document.createElement('a')
    const a_linkedin = document.createElement('a') 
    const a_url = document.createElement('a')
    
    spancontact.setAttribute('id','contactno-id')
    spancontact.innerHTML = ' ' + contactno  
    spancountry.setAttribute('id','country-id')
    spancountry.innerHTML = country
    a_email.setAttribute('id','emailid-id')
    a_email.setAttribute('href',`mailto:${email}`)
    a_email.innerHTML = ' ' + email
    a_linkedin.setAttribute('id','linkedin-id')
    a_linkedin.setAttribute('href',`${linkedin}`)
    a_linkedin.innerHTML = '  '+linkedin
    a_url.setAttribute('id','url-id')
    a_url.setAttribute('href',`${url}`)
    a_url.innerHTML = url 
    
    old_spancontact = document.getElementById('contactno-id')
    old_spancountry = document.getElementById('country-id')
    old_a_email = document.getElementById('emailid-id')
    old_a_linkedin = document.getElementById('linkedin-id')  
    old_a_url = document.getElementById('url-id') 

    old_spancontact.parentNode.replaceChild(spancontact,old_spancontact)
    old_spancountry.parentNode.replaceChild(spancountry,old_spancountry)
    old_a_email.parentNode.replaceChild(a_email,old_a_email)
    old_a_linkedin.parentNode.replaceChild(a_linkedin,old_a_linkedin)
    old_a_url.parentNode.replaceChild(a_url,old_a_url)  
}

function addEducationDetail(formData)
{
    let degree = formData.degree_details.value 
    let field = formData.field.value
    let grade = formData.grade.value
    let university = formData.university.value
    let start_year = formData.start_year.value
    let end_year = formData.end_year.value

    const education_detail =  ` 
        <div class="degree">${degree}</div>
        <div>
            <span class="degree-type">${field} </span>
        </div>
        <div class="grade">
            <span>Grade</span><span class="grade-num">${grade}</span>
        </div>
        <div class="university"> 
            <span>${university}</span> <span class="year">${start_year}-${end_year}</span>
        </div> `

    const div1 = document.createElement('div')
    div1.setAttribute('class','education-details')
    div1.innerHTML = education_detail
    div2 = div1.cloneNode(true)  
    div1.setAttribute('id','education-' + education_count + '-main')
    div2.setAttribute('id','education-' + education_count)
    div2.setAttribute('onClick',`removeFromHtml('education-${education_count}')`)
    document.getElementById('education-id').appendChild(div1)
    document.getElementById('div-values').appendChild(div2)
}

function addSkill(formData) {
    let data = formData.skill.value
    skill_count++
    const list1 = document.createElement("li")
    const list2 = document.createElement("li")
    list1.setAttribute('id',skill_count)
    list1.setAttribute('onClick',"removeFromHtml(" + skill_count + ")")
    list2.setAttribute('id',skill_count+'-main')
    list1.innerHTML = data
    list2.innerHTML = data
    const skillsdiv = document.getElementById('skills-id')
    skillsdiv.appendChild(list2)
    const formsdiv = document.getElementById('div-values')
    formsdiv.appendChild(list1)
}

function addExpertise(formData) {
    let data = formData.expertise.value
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    div1.setAttribute('id',"expertiseDivId-main")
    div1.innerHTML = data
    div2.setAttribute('id',"expertiseDivId")
    div2.setAttribute('onClick',"removeFromHtml('expertiseDivId')")
    div2.innerHTML = data
    const expertisediv = document.getElementById('expertise-id')
    document.getElementById('expertise-value-id').innerHTML = ''
    expertisediv.appendChild(div1)   
    const formsdiv = document.getElementById('div-values')
    formsdiv.appendChild(div2) 
}

function addProfile(formData)
{
    let data = formData.profile.value
    const div = document.createElement('div')
    div.innerText = data 
    div.setAttribute('id','profile-id')
    div.setAttribute('onClick',"removeFromHtml('profile-id')")
    document.getElementById('div-values').appendChild(div)
    document.getElementById('profile-id-main').innerHTML = data
}

function addBulletedList()
{
    let data = document.getElementById('bulletpointId').value
    workexp_listarr.push(data)
    const li = document.createElement('li')
    li.setAttribute('id','workexp_bl_' + workexp_listcount)
    li.setAttribute('onClick',`removeFromHtml('workexp_bl_${workexp_listcount}')`)  
    li.innerHTML = data 
    document.getElementById('bulletsId').appendChild(li)
    workexp_listcount++ 
}

function addWorkExperience(formData)
{
    let companyname = formData.company.value
    let month_year1 = formData.month_year1.value
    let month_year2 = formData.month_year2.value
    let work_summary = formData.work_summary.value
    
    workexp_count++;
    workexp_listcount = 0;

    const html = `
        <div class="sub-block-title">Job title / Position</div>
        <div class="meta-data"><span>${companyname}</span><span class="year">${month_year1} - ${month_year2}</span></div>
        <div class="content-summary">${work_summary}</div>
        <br id="content-summary-${workexp_count}">` 
    let div1 = document.createElement('div') 
    div1.innerHTML = html 
    div2 = div1.cloneNode(true)
    div1.setAttribute('id','workdiv' + workexp_count + '-main')
    div2.setAttribute('id','workdiv' + workexp_count)
    div2.setAttribute('onClick',`removeFromHtml('workdiv${workexp_count}')`)
    let workexpdiv = document.getElementById('workexperienceId')
    workexpdiv.appendChild(div1) 
    let formsdiv = document.getElementById('div-values')
    formsdiv.appendChild(div2) 
    document.getElementById('bulletsId').innerHTML = ''
    
    for(let j=0,i=0;i<workexp_listarr.length ;i++,j++) 
    {
        let li = document.createElement('li')
        li.innerHTML = workexp_listarr[i]
        const workexpsubdiv = document.getElementById('workdiv' + workexp_count)
        const workexpsubdivmain = document.getElementById('workdiv' + workexp_count + '-main')
        console.log({workexpsubdiv})
        console.log({workexpsubdivmain})
        console.log({ workexpsubdiv: workexpsubdiv.children[i+3]})  //br br br
        console.log(workexpsubdivmain.children[i+3]) //br ud ud

        // workexpsubdivmain.insertBefore(li,workexpsubdivmain.children[i+3])
        // workexpsubdiv.insertBefore(li,workexpsubdiv.children[i+3])
    }
    workexp_listarr.length = 0 
}








