const system = {
    lifts: 0,
    floors: 0,
    state: [],
}
const floorContainer = document.querySelector("#floor")
const liftContainer = document.querySelector("#lift")


function liftFunctioning(){
    const liftInput = document.querySelector(".lift-input")
    const liftOutput = document.querySelector(".lift-output")
    liftInput.style.display = "none"
    liftOutput.style.display = "block"

    const totalFloors = document.querySelector(".nooffloors").value
    const totalLifts = document.querySelector(".nooflifts").value

    system.floors = totalFloors
    system.lifts = totalLifts



    console.log(totalLifts, totalFloors)
}