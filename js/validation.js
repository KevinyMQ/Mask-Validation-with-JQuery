$(document).ready(function(){

  //Getting doc references by id and datatype attribute
  const form = $("#form");
  const date = $("input[data-type='date']");
  const name = $("input[data-type='name']");
  const login = $("input[data-type='login']");
  const email = $("input[data-type='email']");
  const phone = $("input[data-type='phone']");

  form.validate(); //Calling main method of validate lib

  //Adding rules for each input
  login.rules("add", {
    pattern: /^[a-zA-Z_][a-zA-Z_0-9]*$/
  });
  name.rules("add", {
    pattern: /(?=^.{0,70}$)^[ÁÉÍÓÚáéíóúÂÊÔâêôÀàÜüÇçÑñÃÕãõ a-zA-Z-]+\s[ÁÉÍÓÚáéíóúÂÊÔâêôÀàÜüÇçÑñÃÕãõ a-zA-Z-]+$/,
    minlength : 10
  });
  email.rules("add", {
    pattern: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  });
  date.each(function(){
    $(this).rules("add", {
      pattern: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
    });
  });
  phone.rules("add", {
    pattern: /^(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})$/
  });


  //Submit event
  form.on('submit', (e) => {
    e.preventDefault();
    if(form.valid()){
      alert("Sucesso");
    }else {
      var inputs = $(e.target).find('input, select').not('[type="hidden"]');
      inputs.each(function() {
         if ($(this).val() == '') {
             $(this).css("border", "2px solid red");
         }
      });
    }
  })

  //Stylizing validation feedback
  form.on('input', (e) => {
    if(e.target.value != ""){
      if($(e.target).valid()){
        $(e.target).css("border", "2px solid green");
      }else{
        $(e.target).css("border", "2px solid yellow");
      }
    }else{
      $(e.target).css("border", "2px solid gray");
    }
  })

})
