(function () {
  let h1= document.getElementById('title')
  h1.className = "header1";
  h1.innerText = "New Account "


  //document.getElementById("userInput").submit();

  let newAcct = {};
 let createAcct = [];
//create div for error messages
 let message = document.createElement("div");
 message.id ="message";
 message.innerHTML = "";
 document.getElementById("messageArea").append(message);

async function userSubmit(){

  message.innerHTML = ""
  

  newAcct["nameInput"] = await document.getElementById("name").value;
  newAcct["email"] = await document.getElementById("email").value;
  newAcct["pass1"] = await document.getElementById("pass1").value;
  newAcct["pass2"] = await document.getElementById("pass2").value;

//Checks that all field have been inputted
  for(let key in newAcct){
    if(newAcct[key] === ""){
      message.innerText = "The " + key + " field is empty!!"
      document.getElementById(key).reset()
    }
  }

  // checks if the passwords match
  if(newAcct["pass1"] !== newAcct["pass2"]){
    
    message.innerHTML = "The password fields do not match!!";

    document.getElementById("pass1").value = ""; 
    document.getElementById("pass2").value = "";
  
  }

  
  console.log(newAcct)
}
  window.addEventListener("submit", userSubmit);




    // const nameInput = document.createElement('div')
    // let nameText = document.createElement('name');
    // nameText.className = 'textLable';
    // nameText.innerText = "Name";
    // nameInput.append(nameText);

  

})()