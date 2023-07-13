/* fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((launchObj) => { 
            const getImage = launchObj.image;
            const imgElement = document.createElement("img");

            imgElement.setAttribute("src", getImage);
            imgElement.setAttribute("width", 300);
            document.body.appendChild(imgElement)    
            })   
        data.forEach((launchObj) => {
            const getName = launchObj.name;
            const nameElement = document.createElement()

            getName.setAttribute("src", getName)
            document.body.imgElement.appendChild(getName)
            })

    })
    */
     
    /* const myPromise = new Promise( (resolve, reject) => {
        
        if (fname == Ironhack) {
            reject("I am Ironhack"); 
        }
        else {
           resolve();
        }
     });
     */
    /*

     const validation = (() => {
        const name = document.querySelector(".inputName").value 
        if (name === "" ) {
            alert("Please insert a name")
        }
        else if (name == "Ironhack") {
            alert ("I am Ironhack, you can't be the same")
        }
     })  
     const form = document.getElementById("form") 
     form.addEventListener("submit", function submit(e) {
        e.preventDefault()
        validation()
     })
     document.getElementsByClassName("submitBtn").addEventListener('click', function() {
        alert("click")
     });  */
  
   /* function validateForm () {
        let x = document.forms["myForm"]["fname"].value; 
        if (x == ""){
            alert("it must be filled out ");
            return validateForm;
        } 
    }

    const validation = (() => {
        const name = document.querySelector(".inputName").value 
        if (name === "" ) {
            alert("Please insert a name")
        }
        else if (name == "Ironhack") {
            return ("I am Ironhack, you can't be the same")
        }
     }) 
     let input = document.querySelector("input")
     
     let submitButton = document.querySelector(".submitBtn")
     submitButton.onclick = () => {
        if (input == "") {
            alert ("Please fill up the form")
        }
        else if (input = "Ironhack") {
            alert ("I am Ironhack, you can't be the same")
        }
        else {
            return 
        }
     } */
     let input = document.querySelector("input")
     
     let submitButton = document.querySelector(".submitBtn")
     submitButton.addEventListener('click', () => { 
        if (input === "") {
            alert ("Please fill up the form")
        }
        else if (input = "Ironhack") {
            alert ("I am Ironhack, you can't be the same")
        }      
    }) 
  