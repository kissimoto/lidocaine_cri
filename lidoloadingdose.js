function lidoProcess(){
    const weight = document.getElementById('weight').value
    const loadingDoseRate = document.getElementById('loadingDoseRate').value
    // const selectedOption = loadingDoseRate.value 
    const drugCon = document.getElementById('drugConcentration').value
    // const drugConOption = drugCon.value
    
    const weightxdose = weight * loadingDoseRate
    console.log(weightxdose)

    const loadingDose = weightxdose / drugCon
    console.log(loadingDose)

// document.write(`<br><h3>The loading dose is ${loadingDose.toFixed (2)} mls</h3>`)
// document.close();

document.getElementById('result').innerHTML = "<h3>The loading dose is " + loadingDose.toFixed(2) + " ml</h3>" 
// "Add "+ (drugVol).toFixed(2) + "ml to the fluid bag<br> Set the fluid rate to " + actualFluidRate + "ml/hr"
}


function process(){
    const weight = document.getElementById('weight').value
    const dose_rate = document.getElementById('dose_rate').value
    const fluidRate = document.getElementById('fluidRate').value
    const bag_size = document.getElementById('bag_size').value
    const drugConcentration = document.getElementById('drugConcentration')
   
    
    // 1. weight multiplied by dose_rate
    // An animal weighs ..20kg and needs a CRI of ...5mg/kg/h... 
    // 5 mg/kg/hr × 20  kg = 100 mg/hour.

    const stepOne = weight * dose_rate
    console.log(stepOne)

    // 2.  Multiply weight by fluid rate
    // ...and a fluid rate of ...2ml/kg/h
    // Example: 2  ml/kg/hour × 20 kg = 40 ml/hour. 

   const weightFluid = weight * fluidRate
    console.log(weightFluid)

    // 3. Divide stepOne by weightFluid
    //  100 mg/hour / 40 ml/hour = 2.5 mg/ml. 
    // Example: 100 mg/hour / 40 ml/hour = 2.5 mg/ml

    const stepThree = stepOne / weightFluid
    console.log(stepThree)

    // 4. Multiply stepThree by bag_size
    // 2.5 mg/ml x 1000 mls = 2500 mg
    // Example: we  have 1l of fluids

    const stepFour = stepThree * bag_size
    console.log(stepFour)

    // 5. 
    // Example: we have a drug (Ketamin) which is fixed at 100mg/ml
    
    const dconcval = drugConcentration.value
    
    addOn = stepFour /  dconcval
    console.log(addOn)  

    // 6. Fluid rate for specific patient
    specFluidRate = fluidRate * weight
    console.log(specFluidRate)

    //7. 

    //Result = Add 'addOn' ml to the bag_size


document.getElementById('result2').innerHTML =(`<h3>Add ${addOn.toFixed (1)} ml to the ${bag_size} ml bag <br> Run at ${specFluidRate} ml/h to provide ${dose_rate} mg/kg/hr</h3>`)   

}
