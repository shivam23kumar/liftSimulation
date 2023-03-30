
const floorContainer = document.querySelector("#floor")
const liftContainer = document.querySelector("#lift")
const totalFloors = document.querySelector(".nooffloors").value
const totalLifts = document.querySelector(".nooflifts").value

const liftFunctioning = document.querySelector(".primary");

liftFunctioning.addEventListener('click', ()=>{
    
    const totalFloors = document.querySelector(".nooffloors").value
    const totalLifts = document.querySelector(".nooflifts").value
    

    if(totalFloors <= 0 || totalFloors > 100 || totalLifts <= 0 || totalLifts > 10) {
        alert("Invalid input! Try again.");
        return;
    }
    else{
        
        document.querySelector(".lift-input").style.display = "none"
        document.querySelector(".lift-output").style.display = "block"
        console.log(totalFloors, totalLifts)
        makingFloors();
    }

})

//Now Lets create a floor 

/* <div class="box">
<div class="buttonLift">
    <div class="button">
        <button class="up" id="up1">Up</button>
        <button class="down" id="down1">Down</button>
     </div>
     <div class="mainLift">
        <div class="lift" id="lift1" flag="free">
          <div class="gates" id="gates">
             <div class="gate1"></div>
             <div class="gate2"></div>
          </div>
         <div>
      </div>
  </div>
  <div class="hrfloorName">
      <hr>
      <span>Floor 1</span>
  </div>
</div> */
function makingFloors() {

    for(let i=totalFloors;i>0;i--){

        let floordiv = document.createElement("div");
        floordiv.className="floor"

        let buttondiv = document.createElement("div");
        buttondiv.className = "lift"

        let buttondiv1 = document.createElement("div");
        buttondiv1.className="button"

        let firstbutton = document.createElement("button")
        firstbutton.className = "up"
        let firsttext = document.createTextNode("up");
        firstbutton.setAttribute("id", `up${i}`)

        firstbutton.appendChild(firsttext)

        let secondbutton = document.createElement("button")
        secondbutton.className = "down" 
        let secondtext = document.createTextNode("down");
        secondbutton.setAttribute("id", `down${i}`)

        secondbutton.appendChild(secondtext)

        buttondiv1.appendChild(firstbutton)
        buttondiv1.appendChild(secondbutton)

        buttondiv.appenChild(buttondiv1)
        floordiv.appenChild(buttondiv)

        let floorName = document.createElement("div")
        floorName.className="floorName"

        let hr = document.createElement("hr")

        let floorNumber = doument.createElement("span")
        floorNumber.innerText = `Floor ${i}`

        floorName.appendChild(hr)
        floorName.appendChild(floorNumber)

        floordiv.appendChild(floorName)

        document.querySelector('.lift-output').appendChild(floordiv);
    }
    // <div class="mainLift">
    // //     <div class="lift" id="lift1" flag="free">
    // //       <div class="gates" id="gates">
    // //          <div class="gate1"></div>
    // //          <div class="gate2"></div>
    // //       </div>
    // //      <div>
    // //   </div>
    let mainLift = document.createElement("div")
    mainLift.className = "mainLift"

    for(let j=0;j<=totalLifts;j++){
        let liftdiv = document.createElement("div")
        liftdiv.className="lift"

        let liftgates = document.createElement("div")
        liftgates.className = "gates"
        liftgates.setAttribute("id", "gates")

        let leftgate = document.createElement("div")
        leftgate.className="leftgate"

        let rightgate = document.createElement("div")
        rightgate.className = "rightgate"

        liftgates.appendChild(leftgate)
        liftgates.appendChild(rightgate)
        liftdiv.appendChild(liftgates)
        mainLift.appendChild(liftdiv)
    }


    
}