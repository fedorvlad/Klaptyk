function required(){
  var name = document.forms["cont_form"].elements["name"].value;
  var email = document.forms["cont_form"].elements["email"].value;
  var phone = document.forms["cont_form"].elements["phone"].value;
  var message = document.forms["cont_form"].elements["message"].value;
      if(name == null || name == ""){
          alert("Введіть ім'я!");
          return false;
      }
      if(email == null || email == ""){
        alert("Введіть email!");
        return false;
    }
      if(phone == null || phone == ""){
          alert("Введіть номер телефону.");
          return false;
      }
      if(message == null || message == ""){
          alert("Введіть повідомлення.");
          return false;
      }
      else{return true;}
}


/*add footer*/
const serverURL = 'https://jaroslav-credopro.github.io/Klaptyk/';
$(document).ready(function(){

    $('#footer-for-all-website-id').load(serverURL + 'data/footer.html');

  
    });