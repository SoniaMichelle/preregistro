$(document).ready(function(){

    function valida_confrima_password(){
        if ($('#registro_password').val() != $('#registro_password_confirmacion').val()) {
            alert("La contraseñas no coinciden, favor de verificar");
            $('#registro_password_confirmacion').val("");
            return false;
        }else{
            registro_password = $('#registro_password').val();

            //recoleccion de datos validos
            recolector_de_informacion = "registro_nombre" + registro_nombre + 
                                        "&registro_paterno" + registro_paterno +
                                        "&registro_materno" + registro_materno +
                                        "&registro_fecha_nacimiento" + registro_fecha_nacimiento +
                                        "&registro_telefono" + registro_telefono +
                                        "&registro_carrera" + registro_carrear +
                                        "&registro_paterno" + registro_mail +
                                        "&registro_paterno" + registro_password ;

            $.ajax({
                type: 'POST',
                data: recolector_de_informacion,
                url: 'control/control_registro.php',
                secces: resultado => {
                    
                }

            })
        }
    }
    function valida_confirmacion_email(){
       //Comporvamos que mail y su confirmacion son iguales
       //esta validacion es mas corta
        if ($('#registro_mail').val() != $('#registro_mail_confirmacion').val()) {
            alert("Los email no coinciden, favor de verificar");
            $('#registro_mail_confirmacion').val("");//limpiamos el control
            return false;//paramos el flujo
        }else{
            //al ser iguales 
            registro_mail = $('#registro_mail').val();//guarda el valor del primer mail
            valida_confrima_password();
        }
    }

    function valida_contruccion_email(){
        cadena = $('#registro_mail').val();
        //Regex para validar contruccion de email
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+s/.test(cadena)) {
           //Si es correcto nos manda a la siguiente validacion
            valida_confirmacion_email();
        }else{
            //de no cumplir nos arroja el mensaje
            alert("Ingresa un email valido por favor");
            return false;
        }
    }
    function valida_seleccion_carrera(){
        carrera = $('#registro_correo').val();
        carrera = carrera.toUpperCase();
        if (carrera == 'SIS' || carrera == 'IND' || carrera == 'GES') {
            registro_carrera = carrera;
            valida_contruccion_email();
        }
    }


    function valida_telefono(){
        regex_telefono = /[55]{2}[0-9]{8}$/;
        telefono = $('#registro_telefono').val();
        numero = telefono.match(regex_telefono);
        /*if (numero == null) {
            //console.log(numero);
            alert('No debes tener mas de 10 digitos');
        }else{
            console.log(numero);
            alert('LISTO TELEFONO');
        }*/
        if (telefono < 0) {
            alert('No existen numeros negativos');
            return false;
        }else if(numero == null){
            alert("Debe tener 10 digitos \n" + 'Inician con 55\n');
        }else{
            registro_telefono = $('registro_telefono').val();
            //validacion_seleccion_carrera();
            alert("LISTO!!");
        }
    }
    function  valida_fecha_nacimiento(){
        if ($('registro_fecha_naciemiento').val() != "") {
            fecha_ingresada = $('#registro_fecha_naciemiento').val().split("-");
            edad = 2021 - fecha_ingresada[0];
            if (edad < 16) {
                alert('La fecha no es validad eres joven')
                return false;
            }else if(edad > 99){
                alert('La fecha no es validad eres viejo')
                return false;
            }else{
                registro_fecha_nacimiento = $('#registro_fecha_naciemiento').val();
                valida_telefono();
            }
        }
    }

    function validad_alfabeto(){
        nombre = $('#registro_nombre').val().trim().toUpperCase();
        paterno = $('#registro_paterno').val().trim().toUpperCase();
        materno = $('#registro_materno').val().trim().toUpperCase();
        regex=/[^a-zA-Z]/;
        //regex1 = /[^\w\s]/gi;
        //regex2 = /[^A-Z\s]/gi;

        valor = nombre.match(regex);
        valor1 = paterno.match(regex);
        valor2 = materno.match(regex);
        if (valor !=null) {
            alert('Caracter invalido en nombre');
        }else if(valor1 !=null){
            alert("Caracter invalido en apellido paterno");
        }else if(valor2 !=null){
            alert("Caracter invalido en apellido materno");
        }else{
            valida_fecha_nacimiento();
            //alert("LISTOOO")
        
        }
    
       /* resultado1= cadena.match(regex1);
        resultado2= cadena.match(regex2);
    
        if (resultado1 != null || resultado2 != null) {
            if (resultado1 == null) {
                resultado1 = "";
            }
            if (resultado2 == null) {
                resultado2 = "";
            }
            alert('Los siguientes caractes no son validos en el nombre: \n\n' + 
            resultado2 + resultado1 );
    
            return false;
        }else{
            registro_nombre = $('#registro_nombre').val();
            registro_nombre = registro_nombre.trim();
            registro_nombre = registro_nombre.toUpperCase();
    
            cadena = $('#registro_paterno').val();
            resultado1= cadena.match(regex1);
            resultado2= cadena.match(regex2);
    
            if (resultado1 != null || resultado2 != null) {
                if (resultado1 == null) {
                    resultado1 = "";
                }
                if (resultado2 == null) {
                    resultado2 = "";
                }
                alert('Los siguientes caractes no son validos en el paterno: \n\n' + 
                resultado2 + resultado1 );
        
                return false;
        }else{
                registro_paterno = $('#registro_paterno').val();
                registro_paterno = registro_paterno.trim();
                registro_paterno = registro_paterno.toUpperCase();
    
                cadena = $('#registro_materno').val();
                resultado1= cadena.match(regex1);
                resultado2= cadena.match(regex2);
    
                if (resultado1 != null || resultado2 != null) {
                    if (resultado1 == null) {
                        resultado1 = "";
                    }
                    if (resultado2 == null) {
                        resultado2 = "";
                    }
                    alert('Los siguientes caractes no son validos en el materno: \n\n' + 
                    resultado2 + resultado1 );
    
                    return false;
    
        }else{
                    registro_nombre = $('#registro_materno').val();
                    registro_nombre = registro_nombre.trim();
                    registro_nombre = registro_nombre.toUpperCase();
    
                    //alert("Textos listos");
                    valida_fecha_nacimiento();
                }
            }
        } */
    }

    function valida_vacion(){
        if ($('#registro_nombre').val() == "") {
            alert("Nombre vacio");
            return false;
        }else if($('#registro_paterno').val() == ""){
            alert("Paterno vacio");
            return false;
        }else if($('#registro_materno').val() == ""){
            alert("Materno vacio");
            return false;
        }else if($('#registro_telefono').val() == ""){
            alert("Telefono vacio");
            return false;
        }else{
            //alert("Bien hecho")
            validad_alfabeto();
        }
    }

    $('#btn_registro').click(function(){
        //console.log("Si reaccion")
        valida_vacion();
    });
});
