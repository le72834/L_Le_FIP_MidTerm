//import file
import Project from "./modules/DataModule.js";


(() => {
    //variable stack here -> the elements you want to interact with
    let lightBox = document.querySelector('.lightbox'),
    closeButton = lightBox.querySelector('.close-button'),
    projectButtons = document.querySelectorAll('.portfolio-project'),
    portfolioSection = document.querySelector('.portfolio'),
    projectTemplate = document.querySelector('#project-template').content;


    //function go in the middle 
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

    //event handling for project
    projectButtons.forEach(button => button.addEventListener("click", showLightBox));
    closeButton.addEventListener('click',hideLightBox);

})();