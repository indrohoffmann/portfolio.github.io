var contactBtn = document.getElementById('contactBtn');
var closeWindow = document.getElementById('contactCloseBtn');
var contactConfirm = document.getElementById('contactConfirm');

contactBtn.onclick = function () {
    document.getElementById('contactBox').style.display = "block";
    /* body.classList.add('backStyle');*/
}

closeWindow.onclick = function () {
    document.getElementById('contactBox').style.display = "none";
    /* body.classList.remove('backStyle')*/
}
var contactform = document.getElementById('contactform')
contactform.addEventListener('submit', function (e) {
    e.preventDefault()
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var message = document.getElementById('message').value

    fetch("http://vunki.eu:8000/mail", {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                message: message,
                email: email
            }),
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        })
        .then(function (response) {
            if (response.status == 200) {
                console.log('Mail sent')
                contactConfirm.classList.add('open');
            } else {
                response.json().then(function (data) {
                    console.log(data.error)
                })
            }
        })

})