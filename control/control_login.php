<?php
    //post es un objeto, son de caracter relacional
    //print($_POST['bandera_nombre']);-->FUNCION DE IMPRESION 
    

    echo $_POST['bandera_nombre'];
    echo $_POST['bandera_contraseñia']
    /*require_once '../app/conexion.php';

    $conexion = conexion();

    $nombre = $_POST['bandera_nombre'];
    $password = $_POST['bandera_contraseña'];
    //instruccion que va a bd
    $query_insert = "INSERT INTO persona(nombre)values(?)"; //paso de parametros limpios

    //blidage de seguridad
    $insert_preparado = $conexion->prepare($query_insert);

    //bind_param: el tipomde dato exacto y no traiga caracteres extraños, verifica que el tipo de dato es correcto
    $insert_preparado->bind_param('s', $nombre); //la s es de string

    $resultado_insert = $insert_preparado->execute();

    if($resultado_insert){
         //respuesta del servidor, se denomina vandera
        //1-positivo 0-negativo 
        echo 1;
    }else{
        echo 0;
    }

    $conexion->close();*/

?>