
  $("button").click(function(){
    var firstName = document.getElementById("text1").value;
    var secondName = document.getElementById("text2").value;
    var email = document.getElementById("text3").value;
    var phoneNumber = document.getElementById("text4").value;
    var message = document.getElementById("text5").value;
    if (firstName===""){
      alert("enter your firstName")
    }
    else
    if(secondName===""){
        alert("enter your secondName")
    }
    else
    if(email===""){
      alert("enter your email")
    }
    else
    if(phoneNumber===""){
        alert("enter your phoneNumber")
    }
    else
    if(message===""){
      alert("type text")
    }
    else{
      alert("Dear " +   firstName+ secondName + " we have received your message successfully." +
      " Feel free to reach out to us anytime. Click Ok to continue to the next page");
    }
  });

;
