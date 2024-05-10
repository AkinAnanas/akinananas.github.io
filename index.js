function projects() {
    var element = document.getElementById("project-header");
    var position = element.offsetTop;
    window.scrollTo(0, position);
    return false;
}

function contact() {
    var element = document.getElementById("contact-details");
    var position = element.offsetTop;
    window.scrollTo(0, position);
    return false;
}