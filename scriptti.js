fetch('vunki.eu:8000/mail')
    .then(res => console.log(res))


var contactBtn = document.getElementById('contactBtn');
var closeWindow = document.getElementById('contactCloseBtn');

contactBtn.onclick = function () {
    document.getElementById('contactBox').style.display = "block";
    /* body.classList.add('backStyle');*/



}

closeWindow.onclick = function () {
    document.getElementById('contactBox').style.display = "none";
    /* body.classList.remove('backStyle')*/
}