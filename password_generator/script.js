const passwordBox=document.querySelector("#password");
const length=15;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXTZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789"
const special="!@#$%^&*_)(~";
const allChar=upperCase+lowerCase+special+number;

function creatPassword(){
    let password="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += special[Math.floor(Math.random()*special.length)];
    
    while(length>password.length){
        password += allChar[Math.floor(Math.random()*allChar.length)];

    }
    passwordBox.value=password;
     
}
 function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

