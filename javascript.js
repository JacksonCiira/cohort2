var firstNameError = document.getElementById("firstName error");
var lastNameError = document.getElementById("lasttName error");
var passwordError = document.getElementById("Password error");
var emailError = document.getElementById("Email error");




  function validateRegisterForm() {
    function validateFirstName(){
      var name =document.getElementById("name-first").value;
    
      if (name.length == 0){
        firstNameError.innerHTML = " Name is Required";
        return false;
      }
      if (!name.match(/^[A-Za-z]*$/)){
        firstNameError.innerHTML = " Write a proper Name";
        return false; 
      }
      firstNameError.innerHTML = "valid";
      return true
    }


    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (firstName() === "" , lastName() === "") {
        alert("Please enter your full name.");
        return false;
    }
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    return true;
}

function validateLoginForm() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;
    
    if (loginEmail() === "" , loginPassword() === "") {
        alert("Please enter your email and password.");
        return false;
    }
    return true;
}

function login() {
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
}
function register() {
    document.getElementById("register").style.display = "block";
    document.getElementById("login").style.display = "none";
}



function myMenuFunction(){
  var i = document.getElementById("navMenu");

  if( i.className === "nav-menu") {
    i.className += "responsive"
  } else {
    i.className = "nav-menu";
  }
}


  var a = document.getElementById("loginBtn");
  var b = document.getElementById("registerBtn");
  var x = document.getElementById("login");
  var y = document.getElementById("register"); 

  function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.clasName = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
  }
  function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.clasName += "white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
  }

