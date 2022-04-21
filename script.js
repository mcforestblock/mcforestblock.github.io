var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
})


function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Click to Copy";
}

function navion() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}