$.validator.addMethod('customphone', function (value, element){
 
    return this.optional(element) || /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(value);
   
  }, "Please enter a valid phone number");

$(function(){
    var $registerForm = $("#registration");

    if($registerForm.length){
        $registerForm.validate({
            errorElement: "span",
            wrapper: "p",
            success: "valid",
            submitHandler: function() { alert("Sikeresen elküldött üzenet!") },
        
            rules:{
                nev:{
                    required: true,
                    maxlength: 30
                },
                emailaddress:{
                    required: true,
                    email: true
                
                },
                message:{
                    required: true
                },
               phone:{
                   customphone:true,
                   maxlength:11,
                   minlength:11
               }
            },
            messages:{
                nev:{
                    required:'Név megadása kötelező!',
                    maxlength: 'A név maximum 30 karakter hosszú lehet!'
                },
                emailaddress:{
                    required:'E-mail cím megadása kötelező!',
                    email: 'Kérem adjon meg egy valós e-mail címet'

                },
                message:{
                    required:'Üzenet megadása kötelező!'
                },
                phone:{
                    customphone:'A telefonszám helyes formátuma: 06301234567'
                }
            },
            highlight: function(element) {
                $(element).css('background', '#ffdddd');
            },  
            
            unhighlight: function(element) {
                $(element).css('background', '#ffffff');
            }
        
        })
    }
})


