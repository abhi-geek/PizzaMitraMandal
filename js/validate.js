function validateEmail(mail)   
{  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))  
  {  
    return (true)  
  }  
    alert("You have entered an invalid email address!")  
    return (false)  
}  


function areaCode(inputtxt)  
{  
  var areacd= /^\d{6}$/;  
  if((inputtxt.value.match(areacd))  
        {  
      return true;  
        }  
      else  
        {  
        alert("message");  
        return false;  
        }  
}

function phoneNumber(inputtxt)  
{  
  var phoneno = /^\d{10}$/;  
  if((inputtxt.value.match(phoneno))  
        {  
      return true;  
        }  
      else  
        {  
        alert("message");  
        return false;  
        }  
}  

function userId(inputtxt)   
{   
var userid= "abhi101"; // /^[A-Za-z]\w{7,14}$/;  
if(inputtxt.value.match(passw))   
{   
alert('Correct, try another...')  
return true;  
}  
else  
{   
alert('Wrong...!')  
return false;  
}  
}  

function checkPassword(inputtxt)   
{   
var passw= "abhichall"; // ^[A-Za-z]\w{7,14}$/;  
if(inputtxt.value.match(passw))   
{   
alert('Correct, try another...')  
return true;  
}  
else  
{   
alert('Wrong...!')  
return false;  
}  
}  

function cardNumber(inputtxt)  
{  
  var cardno = /^(?:3[47][0-9]{13})$/;  
  if(inputtxt.value.match(cardno))  
        {  
      return true;  
        }  
      else  
        {  
        alert("Not a valid credit card number!");  
        return false;  
        }  
}  