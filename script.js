document.getElementById('copyButton').addEventListener('click', function() {
    var copyText = document.getElementById("myText");
    navigator.clipboard.writeText(copyText.value)
        .then(() => alert("Copied the text: " + copyText.value))
        .catch(err => console.error('Error copying text: ', err));
});
