fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
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
    