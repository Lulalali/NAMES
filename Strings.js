function userForm() 
{
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var zipcode = document.getElementById("zipcode").value;

    var fullname = firstname + " " +lastname;
    if (fullname.length >20) 

    
    {
        document.getElementById("status").innerHTML = "Name is too long"
    }
    else if (zipcode.length !==5) {
        document.getElementById("status").innerHTML = "Zip Code Invalid"

    }
    else
    {
        document.getElementById("status").innerHTML = "You are in!!"
    }

}