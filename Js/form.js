function validation(){
    //link  html with javascript
    var name=document.forms["LoginForm"]["name"].value;
    var gender=document.forms["LoginForm"]["genderDetails"].value;
    var email=document.forms["LoginForm"]["email"].value;
    var message=document.forms["LoginForm"]["message"].value;
    //condition to check if the spaces are filled or not
    if(name=="" || email=="" || message==""){
        alert("Fill all the space");
    }
    else{
        alert("Thank you for filling up the form");
    }
}