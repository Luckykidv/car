function myAlert(){
    var text;
    if (confirm("Procced to Luckys Automotive company website!")){
        text = "You pressed Ok"
    } else {
        text = "You pressed Cancel!"
    }
    document.getElementById("button").innerHTML = text;
}