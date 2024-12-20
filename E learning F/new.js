

function checklogin(event){

  event.preventDefault();
  
    let currentUser = localStorage.getItem("currentuser");
  
    if(!currentUser){
      alert("Please login first");
      window.location.replace("index.html");
    }
    else{
      window.location.href = event.target.href;
    }
  }



var userName = document.getElementById("userName");
var userEmail = document.getElementById("email");
var userPassword = document.getElementById("password");
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword")


function signupFunc() {
if(userName == "" ||!userEmail || !userPassword ){
  alert("Please fill all the fields");
  return;
}

let usersArray = localStorage.getItem("users")  || [];

if(usersArray != 0){
  usersArray = JSON.parse(usersArray);
}

for(var i = 0; i < usersArray.length; i++){
  if(userEmail.value == usersArray[i].userEmail){
    alert("Email exists already");
    return;
  }
}

const upobj = {
  userName :userName.value,
  userEmail:userEmail.value,
  userPassword:userPassword.value
};

usersArray.push(upobj);
localStorage.setItem( "users", JSON.stringify(usersArray));


userName.value = "";
userEmail.value = "";
userPassword.value = "";


alert("signed up successfully");


}

function loginFunc(){
  let usersArray = localStorage.getItem("users");
  
  if(!usersArray){
    alert("You are not signed in");
    return;
  }

usersArray = JSON.parse(usersArray);


var flag = false;

for(var i = 0; i < usersArray.length; i++){
  if(loginEmail.value == usersArray[i].userEmail &&
    loginPassword.value == usersArray[i].userPassword
  ){
    
    localStorage.setItem("currentuser", JSON.stringify(usersArray[i]))
    
    flag = true;
    window.location.replace("home.html");
    document.getElementById("display").innerText = usersArray[i].userName
    alert(`You ${usersArray[i].userName} are logged in finally`);
    break;
  }
}


if (!flag) {
  alert("Please enter correct credentials")
}


}


















// function signupFunc() {
//   if (userName.value == "" || !userEamil.value || !userPass.value) {
//     alert("Please fill all the fields");
//     return;
//   }

//   let usersArray = localStorage.getItem("users") || [];
//   console.log("wiuout parse", usersArray);

//   if (usersArray.length != 0) {
//     usersArray = JSON.parse(usersArray);
//   }

//   for (var i = 0; i < usersArray.length; i++) {
//     if (userEamil.value == usersArray[i].userEamil) {
//       alert("Email already in use");
//       return;
//     }
//   }

//   const userObj = {
//     userName: userName.value,
//     userEamil: userEamil.value,
//     userPass: userPass.value,
//   };
//   usersArray.push(userObj);
//   localStorage.setItem("users", JSON.stringify(usersArray));

//   userName.value = "";
//   userEamil.value = "";
//   userPass.value = "";
//   alert("Signed up successfully");
// }




// function loginFunc() {
//     let usersArray = localStorage.getItem("users");
//     if (usersArray == null) {
//       alert("You are not signed up");
//       return;
//     }
//     usersArray = JSON.parse(usersArray);
  
//     var flag = false;
  
//     for (var i = 0; i < usersArray.length; i++) {
//       if (
//         loginEmail.value == usersArray[i].userEamil &&
//         loginPassword.value == usersArray[i].userPass
//       ) {
//         flag = true;
//         alert("Logged in successfully");
//         window.location.replace("/index.html");
//       }
//     }
//     if (!flag) {
//       alert("Please enter correct credentials");
//     }
//   }