
var log = "abc";
var pass = "abc";
var btn= document.querySelector("button");
function showpop(){
    var login = document.getElementById('login-id').value;
    var password = document.getElementById('password').value;
    if(login =="abc" && password=="abc")
    alert("done");
    else if(login != "abc" && password=="abc")
    alert("Invalid Password");
    else if(login=="abc" && password!="abc")
    alert("Invalid Id")
}
var clicked = btn.addEventListener("click",showpop);


