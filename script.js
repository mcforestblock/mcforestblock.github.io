var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

function CopyToClipboard(id) {
var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}

new PlayerCounter({
    element: element,
    ip: 'server ip',
    format: '{online}/{max}', // default {online}
    refreshRate: 60 * 1000 // default 1m
  });