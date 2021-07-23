var temp;
var tempp;
var log = ["abc","123",temp];
var pass = ["abc","123",tempp];
var count=0;
var invalidMessage = $(".invalid-credentials");
var btn= $(".btn");
var btn2= $(".btn-2");

function showpop(){
    var login = $("#login-id").val();
    var password = $("#password").val();
    for(var i=0;i<log.length;i++)
    {
    if(login ==log[i] && password==pass[i])
    {
    window.open("https://www.google.com","_self");
    count=1;
    }
} 
if(count==0)
    invalidMessage.css("display","flex");
}
btn.click(showpop);

function register(){
    temp = $("#register-id").val();
tempp = $("#register-password").val();
    log.push(temp);
    pass.push(tempp);
  //  console.log(regUser);
   // console.log(log);
   console.log(log);
}
btn2.click(register);
