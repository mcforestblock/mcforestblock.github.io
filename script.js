function clipboard() {
    var copyText = document.getElementById("headertext")

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    alert("Copied the text :" + copyText.Value);
}