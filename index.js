(function () {
  let h1= document.getElementById('title')
  h1.className = "header";
  h1.innerText = "New Account"


  //document.getElementById("userInput").submit();

  let newAcct = {};
  let createAcct = [];

//create div for error messages
 let message = document.createElement("div");
 message.id ="message";
 message.innerHTML = "";
 document.getElementById("messageArea").append(message);


//create sign in link
 const signIn = document.createElement('div')
 signIn.id = 'signIn';
 signIn.textContent = "Already have an account? ";
 const link = document.createElement('a');
 link.textContent = "Sign In";
 link.href = "#"
 document.getElementById("content").append(signIn);
 document.getElementById("signIn").append(link)
  
 //Validates user input when the "Create Account" Button is clicked
 function userSubmit(){
    //used in the validating process
    let isInfoOK = true;

    //reset error message to a blank string
    message.innerHTML = "";
    document.getElementById("messageArea").append(message);

    //stores input in an object
    newAcct["nameInput"] = document.getElementById("name").value;
    newAcct["email"] = document.getElementById("email").value;
    newAcct["pass1"] = document.getElementById("pass1").value;
    newAcct["pass2"] = document.getElementById("pass2").value;

  //Checks that all field have been inputed
    for(let key in newAcct){
      if(newAcct[key] === ""){
        isInfoOK = false;
        message.innerText = "A field is empty!!"
        document.getElementById(key).reset()
      }
    }

    // checks if the passwords match
    if(newAcct["pass1"] !== newAcct["pass2"]){
      isInfoOK = false;
      message.innerHTML = "The password fields do not match!!";
      document.getElementById("pass1").value = ""; 
      document.getElementById("pass2").value = "";
    
    }
    
  //validates the password
  let isValid = /(?=.*[a-zA-Z_])(?=.*\d).{12,}/;
  let noWhiteSpace = /^\S*$/;
    console.log(newAcct)
    
  
    if(!isValid.test(newAcct["pass1"]) || !noWhiteSpace.test(newAcct["pass1"])){
      isInfoOK = false;
      message.innerHTML = "The password should have 12 or more combination of letters, numbers, and symbols";
      document.getElementById("pass1").value = ""; 
      document.getElementById("pass2").value = "";
  }

  //if the input is valid it rerenders the page and displays a message
    if(isInfoOK === true){
      createAcct.push(newAcct);
      document.getElementById("userInput").reset()
      document.getElementById("content").innerHTML ='';
      
    }
  }

  window.addEventListener("submit", userSubmit);

})()