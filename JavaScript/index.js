
var temp;
var tempp;
var log = ["abc","123",temp];
var pass = ["abc","123",tempp];
var count=0;
var invalidMessage = document.querySelector(".invalid-credentials");
var btn= document.querySelector(".btn");
var btn2= document.querySelector(".btn-2");

function showpop(){
    var login = document.getElementById('login-id').value;
    var password = document.getElementById('password').value;
    for(var i=0;i<log.length;i++)
    {
    if(login ==log[i] && password==pass[i])
    {
    window.open("https://www.google.com","_self");
    count=1;
    }
} 
if(count==0)
    invalidMessage.style.display = "flex";
}
btn.addEventListener("click",showpop);
