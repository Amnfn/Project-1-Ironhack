fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((launchObj) => { 
            const getImage = launchObj.image;
            const imgElement = document.createElement("img");

            imgElement.setAttribute("src", getImage);
            imgElement.setAttribute("width", 500);
            document.body.appendChild(imgElement)    
            })    
    })
    .then((data) =>  {
        data.forEach((userName) => { 
            const markup = userName.name;
            document.querySelector('ul').insertAdjacentHTML('beforeend', markup);   
            })    
    })