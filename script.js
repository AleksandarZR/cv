window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);

var pageHeight = window.innerHeight;

function scrollToPersonal() {
    window.scrollTo(0, 0);
}

function scrollToEducation() {
    let windowHeight = window.innerHeight;
    // window.scrollBy(0, 0);
    window.scrollTo(0, windowHeight);
}

function scrollToSkills() {
    let windowHeight = window.innerHeight;
    // window.scrollBy(0, 0);
    window.scrollTo(0, 2 * windowHeight);
}

function scrollToExperience() {
    let windowHeight = window.innerHeight;
    // window.scrollBy(0, 0);
    window.scrollTo(0, 3 * windowHeight);
}

function scrollToAbout() {
    let windowHeight = window.innerHeight;
    window.scrollTo(0, 4 * windowHeight);
}

function changeDropDownMenuVisibility() {
    var display = document.getElementById("dropdown-menu").style.display;
    
    if (display === "flex") {
        document.getElementById("dropdown-menu").style.display = "none";
    } else {
        document.getElementById("dropdown-menu").style.display = "flex";
    }

}
