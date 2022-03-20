let lengthEl = document.querySelector("#length-el")
let volumeEl = document.querySelector("#volume-el")
let massEl = document.querySelector("#mass-el")
let inputEl = document.querySelector("#input-el")

function calculate(value) {
    let toFeet = inputEl.value * 3.2808 
    let toMetres = inputEl.value * 0.3048
    
    let toGallons = inputEl.value * 0.2642
    let toLitres = inputEl.value * 3.7854
 
    let toPounds = inputEl.value * 2.2046
    let toKilograms = inputEl.value * 0.4536

     lengthEl.textContent = inputEl.value + " metres " + "= " + toFeet.toFixed(3) + " feet" + " | " + inputEl.value + " feet " + "= " + toMetres.toFixed(3) + " metres"

     volumeEl.textContent = inputEl.value + " litres " + "= " + toGallons.toFixed(3) + " gallons" + " | " + inputEl.value + " gallons " + "= " + toLitres.toFixed(3) + " litres"

     massEl.textContent = inputEl.value + " kilos " + "= " + toPounds.toFixed(3) + " pounds" + " | " + inputEl.value + " pounds " + "= " + toKilograms.toFixed(3) + " kilos"
}
calculate()
