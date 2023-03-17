
export function deepNodeCreation(elementBlock, Id, displaydiv)
{
    const newElementBlock = elementBlock.cloneNode(true)
    newElementBlock.setAttribute('onClick', `removeFromHtml("${Id}")`)
    newElementBlock.setAttribute('id', `${Id}`)
    displaydiv.appendChild(newElementBlock)
}

export function setMultipleAttributes(element, attributeObj)
{
    for(let attribute in attributeObj)
        element.setAttribute(attribute,attributeObj[attribute])
}

export function replaceMultipleChild(elementIds, newElements)
{
    for(let i=0; i<elementIds.length; i++)
    {
        const oldElement = document.getElementById(elementIds[i])
        oldElement.parentNode.replaceChild(newElements[i],oldElement)
    }
}


