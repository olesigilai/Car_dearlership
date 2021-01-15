
$("button").click(function(){
  var user = document.getElementById("user").value;
  var password = document.getElementById("password").value;
  
  if (user ===""){
    alert("enter your name")
  }
      
 


      if (password == "12345"){
        alert("Dear " +   user + " we have taken your email and password ." + 
        " you can anytime login at your ow pleasure. Click Ok to continue and register wit our mailchimp.");
      
  
    
  }
  else {
    alert("enter correct password, anyway fill the mailchimp form ...")}
});
