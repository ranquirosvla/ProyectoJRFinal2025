console.log(`Funcionando Archivo: API_Contacto`);

document.addEventListener('DOMContentLoaded', (e) => {
    
   Mostrar_Formulario();
    
});

function Mostrar_Formulario() {
    let Contenedor_IdFooter = document.getElementById('IdContacto'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `
            <div class="">
                <h1>Contáctanos</h1>
                <br>
                <p>Envíanos tu información y te contactaremos a la bervedad posible.</p>
            </div>
            <div class="form-group">
                <label for=""></label>
                <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="">
                <small id="emailHelpId" class="form-text text-muted">Nombre:</small>
            </div>
                <div class="form-group">
                    <label for=""></label>
                    <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="">
                    <small id="emailHelpId" class="form-text text-muted">Correo:</small>
                </div>
            <div class="form-group">
                <label for=""></label>
                <input type="password" class="form-control" name="" id="" placeholder="">
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
     ` ;
     
}