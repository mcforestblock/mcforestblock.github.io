function copyToClipboard(value) {
    navigator.clipboard.writeText(value);
    console.log("Copied " + value);
    document.getElementById('cliptext').innerHTML = "Copied to Clipboard";
}