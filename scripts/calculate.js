function calculateTriangleArea(){
    const baseField = document.getElementById('base-triangle');
    const baseFieldString = baseField.value;
    const base = parseFloat(baseFieldString);
    baseField.value= '';
    const heightField = document.getElementById('triangle-height');
    const heightFieldString = heightField.value;
    const height = parseFloat(heightFieldString);
    heightField.value= '';
    const area = 0.5 * base * height
    const areaResult = document.getElementById('area-result');
    areaResult.innerText = area;
    addToCalculationEntry('Triangle', area)
}
function calculateRectangleArea(){
    const widthField = document.getElementById('width-rectangle');
    const widthFieldString = widthField.value;
    const width = parseFloat(widthFieldString);
    widthField.value = '';
    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldString = lengthField.value;
    const length = parseFloat(lengthFieldString);
    lengthField.value = '';
    const area = width * length
    const areaResult = document.getElementById('rectangle-result');
    areaResult.innerText = area;
    addToCalculationEntry('Rectangle', area)
}
function calculateParallelogramArea(){
    const base = getInputValue('base-parallelogram')
    const height = getInputValue('height-parallelogram')
    if(isNaN(base) || isNaN(height)){
        alert('please insert a number');
        return;
    }
    const area = base * height
    addToCalculationEntry('parallelogram', area)
    setElementInnerText('parallelogram-result', area);
}
function calculateRhombusArea(){
    const diagonal1 = getInputValue('diagonal1-rhombus')
    const diagonal2 = getInputValue('diagonal2-rhombus')
    const area = 0.5 * diagonal1 * diagonal2;
    setElementInnerText('rhombus-result',area);
}
function calculateEllipseArea(){
    const shortRadius = getInputValue ('ellipse-short')
    const largeRadius = getInputValue('ellipse-large')
    if(isNaN(shortRadius) || isNaN(largeRadius)){
        alert('please insert a number')
        return;
    }
    area =  (3.1416 * shortRadius * largeRadius).toFixed(2);
    setElementInnerText('ellipse-result', area);
}
// Reusable function 
function addToCalculationEntry(areaType, area){
    const calculationEntry = document.getElementById('calculation-entry')
    const p = document.createElement('p')
    p.classList.add('my-3');
    const count = calculationEntry.childElementCount;
    p.innerHTML =`${count+1}. ${areaType} ${area} cm <sup>2</sup>`;
    calculationEntry.appendChild(p);
 }
function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    inputField.value=''
    return value;
}
function setElementInnerText (id, value){
    const element = document.getElementById(id)
    element.innerText = value;
}