var fname = document.getElementById(`fname`);

var lname = document.getElementById(`lname`);

var pass = document.getElementById(`password`);
var email = document.getElementById(`email`);
var pass1 = document.getElementById(`passwordc`);
var error = document.getElementById("error");
var passlenght = document.getElementById(`passlenght`);
var passerror = document.getElementById(`passerror`);
var butt = document.getElementById(`submit`);
var passstrenght = document.getElementById(`passstrenght`);



function validate(){
    
    if (!email.value.match(/^[A-Za-z\_.\-0-9]*[@]*[A-Za-z]*[\.][A-Za-z]{2,4}$/)){
        
        // (/^[A-Za-z\._\-0-9]*[@]*[A-Za-z]*[\.][A-Za-z]{3,4}$/) Email validating regular expression
        
        error.textContent = "please input a valid email"
        error.style.color = "red"
        return false
    }else{
        error.textContent = "valid email";
        error.style.color = "green"
    }

}

function validatepass()
//  (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) 
// password regualar expression to match standard
{
    if (pass.value.length < 8 ){
        passlenght.textContent = "Weak Password symbol/char/lowercase uppers"
    }else if(pass.value.length < 10 ){
         passlenght.textContent = "Less Weak Password"
    }else if(pass.value.length >= 10 
        && !pass.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))
    {
         passlenght.textContent = "Strong Password but does'nt match expected format"
    }else if(pass.value.length > 10 && 
        pass.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))
    {
        passlenght.textContent = "Strong and match ✅✅"
    }
}
function validate1() {
    if(pass.value !== pass1.value){
        passerror.textContent = "password does not match ❌";
        butt.style.display = "none";
    }
    else{
        passerror.textContent = "Password match✅"
        butt.style.display = "block";
    }
}

if (!fname.value || !lname.value || !pass.value || !email.value || !pass1.value)
    {
    butt.style.color = "white";
    butt.style.backgroundColor = "red";
}else{
    butt.style.color = "white";
    butt.style.backgroundColor = "green";
}


