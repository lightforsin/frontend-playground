function Register() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let emailrequest = 0;

    fetch("http://localhost:3000/Users?email=" + email)
    .then((res) => res.json())
    .then((data) => {
        if (data.length > 0){    
            emailrequest += 1 ;
            console.log(emailrequest)
        }

        if(name.length<1){
            document.getElementById('name').style.borderColor = "red";
            alert("Do you have a real name? If not go and steal one");
            return
        }else if(name.length>1){
            document.getElementById('name').style.borderColor = "green";
        }
        
        
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == 0) {
            document.getElementById('email').style.borderColor = "red";
            alert("You have entered an invalid email address!");
            return
        }else if(emailrequest > 0){
            document.getElementById('email').style.borderColor = "red";
            alert("This email has already a account!")
            return
        }else {
            document.getElementById('email').style.borderColor = "green";
        }
        
        if(password.length<4){
            document.getElementById('password').style.borderColor = "red";
            alert("Your password must have at least 5 characters");
            return
        }else {
            document.getElementById('password').style.borderColor = "green";
        }
        
        document.getElementById('name').value ="";
        document.getElementById('name').style.borderColor = "initial";

        document.getElementById('email').value ="";
        document.getElementById('email').style.borderColor = "initial";
        
        document.getElementById('password').value ="";
        document.getElementById('password').style.borderColor = "initial";

        fetch('http://localhost:3000/Users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ name: name, email: email, password: password })
    })
        .then((res) => res.json())
        console.log(emailrequest + "ase");
        
       
    })
    
    
        
        
    

    

}



