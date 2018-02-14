function Login() {


    let email = document.getElementById('useremail').value;
    let pasword = document.getElementById('userpassword').value;   



    let url = 'http://localhost:3000/Users?email=' + email;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if (data.length > 0) {
                if (data[0].password == pasword) {
                    alert("You are loged in Mr " + data[0].name)
                } else {
                    alert("Wrong password")
                }
            }else{
                alert("This email does not have a account here")
            }

        })
}

