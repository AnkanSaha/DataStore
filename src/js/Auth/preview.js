var Name = localStorage.getItem("Name");
var Email = localStorage.getItem("Email");
var Password = localStorage.getItem("Password");
var AccountID = localStorage.getItem("AccountID");

if (Name == null || Email == null || Password == null || AccountID == null) {
  window.location.href = "/login";
} else if (Name != null && Email != null && Password != null) {
  alert(`Wellcome ${Name} To Your Secure Account`);
  document.getElementById("username").innerText = `Wellcome ${Name}`;
  document.getElementById('accountID').innerText = `Account ID : ${AccountID}`
  document.getElementById('email').innerText = `${Email}`
  document.getElementById("titleusername").innerText = `Wellcome ${Name}`;
}

//logout feature
document.getElementById("logoutbtn").addEventListener("click", () => {
  var permission = confirm("Want to password for future login ?");
  if (permission == true) {
    alert("Login details saved for future login 🥰");
    window.location.href = "/";
  } else if (permission != true || permission == false) {
    localStorage.removeItem("Name");
    localStorage.removeItem("Email");
    localStorage.removeItem("Password");
    localStorage.removeItem("AccountID");
    alert("You need password for next login 😢");
    window.location.href = "/login";
  }
});

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
}); // Right Click Truned Off
