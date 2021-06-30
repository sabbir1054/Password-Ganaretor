var alertBox = document.querySelector('.alert-box');

function getPassword() {
    var character = "qwertyuiopasdfghjklzxcvbnm,QWERTYUIOPASDFGHJKL:ZXCVBNM<>{}?[';.]'/1234567890-=!@#$%^&*()_+";

    var passwordLength = 16;
    var password = '';

    for (var i = 0; i < passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * character.length);
        password+=character.substring(randomNumber, randomNumber+1)
    }
    document.getElementById('password').value = password;
}


function copyPassword() {
    var copyPassText = document.getElementById("password");
    copyPassText.select();
    copyPassText.setSelectionRange(0, 9999999999);
    document.execCommand("copy");
    alertBox.classList.toggle('active')
}