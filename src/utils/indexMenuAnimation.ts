
export function profileHover() {

    //Get variables
    document.getElementById("headerMenu").style.display = 'block'
    const textProfile = document.getElementById("textProfile");
    const profile = document.getElementById("profile");
    const element = document.getElementById("header");
    const comeBackButton = document.getElementById("comeBackButton");


    const widthDevice = window.innerWidth

    //Transition
    element.style.transition = "all 0.7s";
    textProfile.style.transition = "all 0.7s";
    profile.style.transition = "all 0.7s";

    // Change atributes of header
    element.style.width = widthDevice < 770 ? '100vw' : "clamp(16rem, 20vw, 20rem)";
    element.style.height = widthDevice < 770 ? '100vh' : "clamp(19rem, 18vw, 23rem)";
    element.style.right = widthDevice < 770 ? '0' : "2rem";
    element.style.padding = "1rem";
    element.style.background = widthDevice < 770 ? 'rgba(29, 19, 59, 0.9)' : "rgba(29, 19, 59, 0.671)";
    element.style.boxShadow = '-25px 25px 50px rgba(107, 66, 225, 0.5)';

    // Change position
    profile.style.position = 'absolute'
    profile.style.top = '1rem';

    (widthDevice < 770)
        ? profile.style.right = '2rem'
        : profile.style.left = '2rem'


    if (widthDevice < 770) {
        comeBackButton.style.display = 'block'
        textProfile.style.display = 'none'

    } else {
        // Change position of textProfile
        textProfile.style.position = 'absolute';
        textProfile.style.top = 'clamp(1.5rem, 2vw, 2rem)'
        textProfile.style.right = '2rem'
    }
}

export function initialProfile() {

    //Get variables
    document.getElementById("headerMenu").style.display = 'none'
    
    const textProfile = document.getElementById("textProfile");
    const profile = document.getElementById("profile");
    const element = document.getElementById("header");
    const comeBackButton = document.getElementById("comeBackButton");

    element.removeAttribute('style')
    textProfile.removeAttribute('style')
    profile.removeAttribute('style')
    comeBackButton.removeAttribute('style')
}