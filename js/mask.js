$(document).ready(function(){
  const date = $("input[data-type='date']");
  const name = $("input[data-type='name']");
  const login = $("input[data-type='login']");
  const email = $("input[data-type='email']");
  const phone = $("input[data-type='phone']");
  date.mask("00/00/0000");
  name.mask("N", {
    translation:{
      'N':{
        pattern: /^[ÁÉÍÓÚáéíóúÂÊÔâêôÀàÜüÇçÑñÃÕãõ a-zA-Z\s]*$/,
        recursive: true
      }
    }
  });
  login.mask("SL",{
    translation:{
      'L':{
        pattern: /^[a-zA-Z_0-9]*$/gm,
        recursive: true
      }
    }
  });
  email.mask("E",{
    translation:{
      'E':{
        pattern: /^[a-zA-Z0-9.\-_@]*$/gm,
        recursive: true
      }
    }
  });
  phone.mask('(00) 0000-00009', {
    onChange: function(value, e, field, options) {
      var masks = ['(00) 0000-00009', '(00) 00000-0009'];
      var mask = (value.length==15) ? masks[1] : masks[0];
      field.mask(mask, options);
    }
  });
})
