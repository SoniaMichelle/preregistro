$(document).ready(function(){
    let nombre;
    let password;
    $('#btn_enviar').click(function(){
        nombre = $('#nombre').val();//val trae todo en cadeana
        password = $('#password').val();
        //biepas, conecta json con js
        recolector = "bandera_nombre=" + nombre+
                        "&bandera_contrasenia=" + password;
        
        //contruir el ajax, se encarga de hacaer la comunicacion asincrona en nuestro servidor
        
        $.ajax({
            //indicamos el protocolo de comunicacion al servidor
            type: 'POST', 
            //datos que vamos a enviar
            data:{
                recolector
            },
            //a donde queremos ir,donde se va a llevar la informacion, se tiene que mapear desde donde estas parado
            url: './control/control_login.php',
            //respuesta de nuestra accion
            success: function(resultado){//promesa
                //respuesta
                console.log(resultado)
            }
        });
    });
});
