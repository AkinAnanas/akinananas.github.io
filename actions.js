var projectsSelected = false;
var dropdown = null;
var projects = null;
var overProjects = false;
var overDropdown = false;

function projectsEnter() {
    overProjects = true;
    updateDropdown();
}

function projectsLeave() {
    overProjects = false;
    updateDropdown();
}

function dropdownEnter() {
    overDropdown = true;
    updateDropdown();
}

function dropdownLeave() {
    overDropdown = false;
    updateDropdown();
}

function select(option) {
    if (option == 'projects') {
        projectsSelected = !projectsSelected;
    }
    console.log('projectsSelected: ' + projectsSelected);
}

function updateDropdown() {
    dropdown = document.getElementById("projects_dropdown");
    projects = document.getElementById("projects");
    dropdown.hidden = !(overProjects || overDropdown || projectsSelected);
    if (!dropdown.hidden) {
        projects.style.fontWeight = 'bold';
        projects.style.backgroundColor = 'mediumpurple';
        projects.style.color = 'white';
    } else {
        projects.style.fontWeight = 'normal';
        projects.style.backgroundColor = 'lightblue';
        projects.style.color = 'lightsteelblue';
    }
}

function findSection(section) {
    if (section.toLowerCase() == 'contact') {
        window.scrollTo(0, document.body.scrollHeight);
    } else if (section.toLowerCase() == 'education') {
        window.scrollTo(0, document.getElementById("education").scrollHeight);
    }
}