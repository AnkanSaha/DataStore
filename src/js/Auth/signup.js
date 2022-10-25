document.getElementById('signupbtn').addEventListener('click', ()=>{
    let Name = document.getElementById('NewName').value
    let Email = document.getElementById('NewEmail').value
    let Country = document.getElementById('NewCountry').value
    let Password = document.getElementById('NewPassword').value
    let ConfirmedPassword = document.getElementById('NewConfirmPassword').value
    console.log(Password, ConfirmedPassword, Name)
    if(Password == ConfirmedPassword){
        if(Name=='' || Email=='' || Country=='' || Password=='' || ConfirmedPassword==''){
            alert('Please Fill up this form to create account 🥺 🙏 🥺')
        }
        else{
            let RemoteData = {Name:Name, Email:Email, Country:Country, Password:ConfirmedPassword}
            fetch('/CreateUser', {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(RemoteData)
            }).then((data)=>{
                data.json().then((response)=>{
                    console.log(response)
                    if(response.status == 'User Successfully Registered'){
                        localStorage.setItem('Name', Name);
                        localStorage.setItem('Email', Email);
                        localStorage.setItem('Country', Country);
                        localStorage.setItem('Password', ConfirmedPassword)
                        alert(response.status)
                        window.location.href='/login'

                    }
                    else if(response.status == 'User Already Exist with this details, Please Login 😃'){
                        alert(response.status)
                        window.location.href='/login'
                    }
                    else if(response.status == 'Internal Server Error'){
                        alert(response.status)
                        window.location.href='/'
                    }
                })
            })

        }
    }
    else if(Password != ConfirmedPassword){
        alert("Password Doesn't 👎 match with Confirm Password")
    }
})