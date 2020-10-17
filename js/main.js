//import file
//import Project from "./modules/DataModule.js";


(() => {
    //variable stack here -> the elements you want to interact with
    let lightBox = document.querySelector('.lightbox'),
    closeButton = lightBox.querySelector('.close-button'),
    projectButtons = document.querySelectorAll('.portfolio-project'),
    portfolioSection = document.querySelector('.portfolio'),
    projectTemplate = document.querySelector('#project-template').content;


    //function go in the middle 
    //this is about the lightbox
    //click on any picture from the portfolio gallery then the lightbox appear
    //inside the lightbox will be detail about the project like software, teamwork, what it about 
    // the lightbox can scroll down
    function showLightBox() {
        debugger;
        lightBox.classList.add("show-lightbox");
    }

    function hideLightBox() {
        lightBox.classList.remove("show-lightbox");
    }
    function handleDataSet(data) {
        debugger;
        for (let project in data) {
            debugger;
            let currentProject = projectTemplate.cloneNode(true),
            currentProjectText = currentProject.querySelector('.proj').children;

            currentProjectText[1].textContent = data[project].name;
            currentProjectText[2].textContent = data[project].software;
            currentProjectText[3].textContent = data[project].madeby;

            portfolioSection.appendChild(currentProject);

        }
    }

    //make an AJAX request using the Fetch API
    fetch('./data/infoData.json')
    .then(res => res.json())
    .then(data => {
        debugger;
        console.log(data);
    })
    .catch ((err) => {
        console.log(err);
    })

    //event handling for project
    projectButtons.forEach(button => button.addEventListener("click", showLightBox));
    closeButton.addEventListener('click',hideLightBox);

})();