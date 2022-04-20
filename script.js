var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
})


// function CopyToClipboard(id) {
//     var r = document.createRange();
//     r.selectNode(document.getElementById(id));
//     window.getSelection().removeAllRanges();
//     window.getSelection().addRange(r);
//     document.execCommand('copy');
//     window.getSelection().removeAllRanges();

//     alert("Copied Server Address");
// }

// function myFunction() {
//     var copyText = document.getElementById("serverip");

//     navigator.clipboard(copyText.value);

//     var tooltip = document.getElementById("myTooltip");
//     tooltip.innerHTML = "Copied to Clipboard";
// }

function copyToClipboard(text) {
    const elem = document.createElement('mc.forestblock.net');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
}

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