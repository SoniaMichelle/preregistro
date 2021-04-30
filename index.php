<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    
    <?php require_once 'app/config.php';
    /**require_once= porque solo lo vamos a usar una vez
     * primero se pode el config: es donde esta alajodo nuestro servidro, nos permite ver que primero se tiene que crear lo de config
     * despues se pone la de dependecias ya que estan los recursos que vamos a utilizar y el servidor
    */
    ?>
    <?php require_once 'app/dependencias.php'; ?>
</head>
<body>
    <?php
    /**isset: ¿Esta colocado algun valor?
     * $_GET:variable de un conjunto de variables que son globales que ya existen, todas son arreglos, pocen una llave 
     * y por cada llave va a tener un valor
     * vista_solicitada: que vista salicidad escribio el usuario en el navegador
     * el if y el else nos van ayudar a verificar que todo vaya bien osea que no haya errores
     * isset si es diferente 0 o vacio en automatico va a contestar con un true o 1 
     */
    if(isset($_GET['vista_solicitada'])){ //se va a encargar de manipular cada uno de los destinos que puedamos visitar
        
        switch($_GET['vista_solicitada']){
            case 'login':
                require_once 'view/login.php';
                break;
                case 'registro':
                    require_once 'view/registro.php';
                    break;
            default:
                require_once 'view/login.php';
                break;
        }
    }else{ //se encarga cuando el usuario no escriba nada
        //requite_once: cuando existen puntos criticos
        //incluid: menos extricto, cuando incluyes un elemento grafico
        require_once 'view/login.php';
    }
    ?>
</body>
</html>
