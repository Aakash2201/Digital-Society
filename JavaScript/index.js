
var log = "abc";
var pass = "abc";
var btn= document.querySelector("button");
function showpop(){
    var login = document.getElementById('login-id').value;
    var password = document.getElementById('password').value;
    if(login =="abc" && password=="abc")
    window.open("https://www.google.com")
    else if(login != "abc" || password!="abc")
    alert("Invalid Login credentials");
}
var clicked = btn.addEventListener("click",showpop)
