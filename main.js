document.addEventListener("DOMContentLoaded", function (event) {

    console.log("123");

    const tablaWeight = {
        mercury:0.38,
        venus:0.90,
        earth:1.00,
        moon:0.17,
        mars:0.38,
        jupiter:2.58,
        saturn:1.06,
        uranus:0.90,
        neptune:1.13,
        pluto:0.07,
    };

    console.log(tablaWeight.mercury)

    function myFunction(e) {
        e.stopPropagation();
        e.preventDefault();

        let optionValue = document.getElementById("planet").value;
        
        //planet name
        document.getElementById("splan").innerHTML = optionValue.toUpperCase();
        //la imagen
        document.getElementById("planetImage").src = "./images/" + optionValue + ".png"

        //input
        let inputNum = document.getElementById("mass").value;

        if(inputNum == ''){
            alert("mass is required");
        }
        if (optionValue  == "--select planet--"){
            document.getElementById("planetImage").src = "./images/earth.png"
            alert("choose planet")
        } 
        if (inputNum !== '' && optionValue !== "--select planet--") {
            document.querySelector(".description").classList.add("descriptionVisible")
            document.querySelector(".description").style.display = 'flex'
        } else  {
            document.querySelector(".description").style.display = 'none'
        }

        
        //weight
        let spanWeight = document.getElementById("maspan")
        spanWeight.innerHTML = (inputNum * tablaWeight[optionValue]).toFixed(2)



    };

    let btnSubmit = document.getElementById("btn-submit")
    btnSubmit.addEventListener("click", myFunction);





    
});

