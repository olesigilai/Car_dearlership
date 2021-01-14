$("button").click(function(){
    var last = document.getElementById("last").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var first = document.getElementById("first").value;
    var number = document.getElementById("number").value;
     if (first ===""){
        alert("enter your first name")
      }
      else if (message ===""){
        alert("enter your name")
      }
     else if (last===""){
        alert("enter your name")
      }
    else 
    if(email===""){
      alert("enter your email")
    }
    else
    if(number===""){
      alert("type text")
    }
    else{
      alert("Dear " +   first + " thank you for your feedback message." + 
      " Feel free to reach out to us anytime.");
    }
  });