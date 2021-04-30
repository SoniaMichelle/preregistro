<?php
    function conexion(){
        //toquen de conexion    server       user   pass   base
        $conexion = new mysqli('localhost', 'root', '', 'preregistro');
    
        //validacion
        //-> manera de invocar
        //connect_errno: monitorear errores de conexion
        if($conexion->connect_errno){
            echo 'Error en la conexion'.$conexion->connect_error;

        }
        //colocale caracteres de tipo utf8
        
        $conexion->set_charset("utf8");

        return $conexion;
    }
?>