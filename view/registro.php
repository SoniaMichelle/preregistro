<div class="container-fluid">
    <div class="row">
        <div class="col">
            <div class="display-4 text-center">
            <h1>Registro para nuevos aspirantes</h1>
            </div>
        </div>
    </div>
    <div class="row justify-centent-around py-4">
        <div class="col-sm-5 mt-1">
            <div style="font-size:3rem;" class="lead">
            Datos Personales
            </div>
            <hr>
            <form id="formulario_registro_a">
                <div class="form-group">
                    <label for="registro_nombre" class="lead">Nombre(s)</label>
                    <input 
                        type="text" 
                        class="form-control form-control-sm"
                        id="registro_nombre"
                        name="registro_nombre"
                    >
                </div>
                <div class="form-group">
                    <label for="registro_paterno" class="lead">Apellido Paterno</label>
                    <input 
                        type="text" 
                        class="form-control form-control-sm"
                        id="registro_paterno"
                        name="registro_paterno"
                    >
                </div>
                <div class="form-group">
                    <label for="registro_materno" class="lead">Apellido Materno</label>
                    <input 
                        type="text" 
                        class="form-control form-control-sm"
                        id="registro_materno"
                        name="registro_materno"
                    >
                </div>
                <div class="form-grupo">
                    <label for="registro_fecha_nacimiento" class="lead">Fecha de Nacimiento</label>
                    <input 
                    type="date" 
                    class="form-control form-control-sm"
                    name="registro_fecha_naciemiento" 
                    id="registro_fecha_naciemiento">
                </div>
                <div class="form-group">
                    <label for="registro_telefono" class="lead">Telefono de contacto(Preferente Movil)</label>
                    <input 
                        type="number" 
                        class="form-control form-control-sm"
                        name="registro_telefono" 
                        id="registro_telefono">
                </div>
                <div class="form-grupo">
                    <label for="registro_carrera" class="lead">Carrera de tu eleccion</label>
                    <select name="registro_carrera" id="registro_carrera" class="form-control form-control-sm">
                        <option value="">Seleccionar</option>
                        <option value="GES">Ingenieria Gestion</option>
                        <option value="IND">Ingenieria Industrial</option>
                        <option value="SIS">Ingenieria Sistemas</option>
                    </select>
                </div>
            </form>
        </div>
        <div class="col-sm-5 mt-1">
            <div style="font-size:3rem;" class="lead">
            Datos Personales
            </div>
            <hr>
            <form id="formulario_registro_b">
                <div class="form-grorp">
                    <label for="registro_mail">Mail Personal</label>
                    <input type="email" 
                    name="registro_mail" 
                    id="registro_mail"
                    class="form-control form-control-sm">
                    
                </div>
                <div class="form-grorp">
                    <label for="registro_password" class="lead">Password</label>
                    <input type="password" 
                    name="registro_password" 
                    id="registro_password"
                    class="form-control form-control-sm">
                    
                </div>
                <div class="form-grorp">
                    <label for="registro_password_confirmacion" class="lead">Confirmar <strong>Password</strong></label>
                    <input type="password_confirmacion" 
                    name="registro_password_confirmacion" 
                    id="registro_password"
                    class="form-control form-control-sm">
                    
                </div>
                <div class="form-grorp">
                <div class="form-grorp">
                   <span class="btn btn-success btn-block" id="btn_registro">
                        <span class="lead">Registrarse</span>
                   </span>
                </div>
                </div>
                <div class="form-grorp">
                   <a class="btn btn-dark btn-block" href="login">
                        <span class="lead">Cancelar</span>
                   </a>
                </div>
            </form>
        </div>
    </div>  
</div>
<script src="manager/manager_registro.js"></script>