           
    var users = [];

    function envioRegistro() {
   
    var username = document.querySelector('#registro input[placeholder="Usuario"]').value;
    var documentNumber = document.querySelector('#registro input[placeholder="Documento o Nit"]').value;
    var password = document.querySelector('#registro input[placeholder="Contraseña"]').value;

   
    var usernameRegex = /^[a-zA-Z0-9]{6,}$/; 
    var documentNumberRegex = /^\d{1,10}$/; 
    var passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 

 
    if (!usernameRegex.test(username)) {
        alert("El nombre de usuario debe contener al menos 6 caracteres, incluidas 1 letra mayuscula y minuscula.");
        return;
    }

    if (!documentNumberRegex.test(documentNumber)) {
        alert("El número de documento debe tener de 1 a 10 dígitos sin puntos.");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("La contraseña debe contener al menos 8 caracteres, 1 letra mayúscula, 1 letra minúscula, 1 dígito y 1 carácter especial.");
        return;
    }

    
    var user = {
        username: username,
        documentNumber: documentNumber,
        password: password,
        balance: 0 
    };

    
    users.push(user);

  
    document.querySelector('#registro input[placeholder="Usuario"]').value = "";
    document.querySelector('#registro input[placeholder="Documento o Nit"]').value = "";
    document.querySelector('#registro input[placeholder="Contraseña"]').value = "";

    console.log("Datos Usuario:", user);
   
    alert("Usuario registrado exitosamente.");
    }

        
        
function registrandoUser() {
    document.getElementById('registro').style.zIndex = '2'; 
    document.getElementById('iniciosesion').style.zIndex = '0'; 
  }
  
  function iniciandoSesion() {
    document.getElementById('iniciosesion').style.zIndex = '2'; 
    document.getElementById('registro').style.zIndex = '0';
  }
  
       
       
      
  document.getElementById('botonLogin').addEventListener('click', function () {
    var usuario = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;

 
    var userFound = false;
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (user.username === usuario && user.password === contrasena) {
            userFound = true;
            break; 
        }
    }

    if (userFound) {
        
        document.getElementById('iniciosesion').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
        document.getElementById('retirar').style.display = 'none';
        document.getElementById('consignar').style.display = 'none';
        document.getElementById('transferir').style.display = 'none';
        document.getElementById('saldo').style.display = 'none';
        document.getElementById('registro').style.display = 'none';
    } else {
        alert('Usuario no registrado o credenciales incorrectas');
    }
});



    document.getElementById('retira').addEventListener('click', function () {
       
        
            document.getElementById('iniciosesion').style.display = 'none';
            document.getElementById('menu').style.display = 'none';
            document.getElementById('retirar').style.display = 'block';
            document.getElementById('consignar').style.display = 'none';
            document.getElementById('transferir').style.display = 'none';
            document.getElementById('saldo').style.display = 'none';
            document.getElementById('registro').style.display = 'none';
       
    });


    document.getElementById('consigna').addEventListener('click', function () {
        
        
            document.getElementById('iniciosesion').style.display = 'none';
            document.getElementById('menu').style.display = 'none';
            document.getElementById('retirar').style.display = 'none';
            document.getElementById('consignar').style.display = 'block';
            document.getElementById('transferir').style.display = 'none';
            document.getElementById('saldo').style.display = 'none';
            document.getElementById('registro').style.display = 'none';
      
    });

    document.getElementById('transfiere').addEventListener('click', function () {
       
        
            document.getElementById('iniciosesion').style.display = 'none';
            document.getElementById('menu').style.display = 'none';
            document.getElementById('retirar').style.display = 'none';
            document.getElementById('consignar').style.display = 'none';
            document.getElementById('transferir').style.display = 'block';
            document.getElementById('saldo').style.display = 'none';
            document.getElementById('registro').style.display = 'none';
     
    });

    document.getElementById('versaldo').addEventListener('click', function () {
     
        
            document.getElementById('iniciosesion').style.display = 'none';
            document.getElementById('menu').style.display = 'none';
            document.getElementById('retirar').style.display = 'none';
            document.getElementById('consignar').style.display = 'none';
            document.getElementById('transferir').style.display = 'none';
            document.getElementById('saldo').style.display = 'block';
            document.getElementById('registro').style.display = 'none';
     
    });
 
var cerrarButtons = document.querySelectorAll('.cerrar');


cerrarButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('iniciosesion').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
        document.getElementById('retirar').style.display = 'none';
        document.getElementById('consignar').style.display = 'none';
        document.getElementById('transferir').style.display = 'none';
        document.getElementById('saldo').style.display = 'none';
        document.getElementById('registro').style.display = 'none';
    });
});




var cerrarSesion = document.querySelector('.botonCerrar');
cerrarSesion.addEventListener('click', function() {

    document.getElementById('iniciosesion').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('retirar').style.display = 'none';
    document.getElementById('consignar').style.display = 'none';
    document.getElementById('transferir').style.display = 'none';
    document.getElementById('saldo').style.display = 'none';

});


function consignarPlata() {
    var ingresoInput = document.querySelector('input[type="text"][placeholder="Valor a Consignar"]');
    var ingreso = ingresoInput.value;
    var ingresos = parseFloat(ingreso);

    if (!isNaN(ingresos)) {
        var saldoElement = document.querySelector('.saldo');
        var saldo = parseFloat(saldoElement.textContent);
        saldo += ingresos;
        saldoElement.textContent = saldo;

        ingresoInput.value = "";
        console.log("Saldo Actualizado: " + saldo);
        alert("Saldo actualizado");
    } else {
        alert("Invalido, Intente Otra vez");
    }
}


function retirarPlata() {
    var egreso = document.getElementById('egresos').value;
    var egresos = parseFloat(egreso);

    if (!isNaN(egresos)) {
        
        var saldoElement = document.getElementById('saldos');
        var saldo = parseFloat(saldoElement.textContent);
        saldo -= egreso;
        saldoElement.textContent = saldo;

        
        document.getElementById('egresos').value = "";
        console.log("Updated saldo: " + saldo);
        alert("Retiro exitoso")
    } else {
        alert("Invalido, Intente Otra vez");
    }
}


function transferirDinero(senderDocumentNumber) {
    var nombreDestinatarioInput = document.querySelector('#transferir input[placeholder="Nombre de quien recibe."]');
    var documentoDestinatarioInput = document.querySelector('#transferir input[placeholder="Documento O NIT."]');
    var tipoDeCuentaInput = document.querySelector('#transferir select[name="tipoDeCuenta"]');
    var numeroCuentaInput = document.getElementById('numero');
    var bancoInput = document.querySelector('#transferir select[name="Bancos"]');
    var montoTransferenciaInput = document.querySelector('#transferir input[placeholder="Valor a Transferir"]');

    var nombreDestinatario = nombreDestinatarioInput.value;
    var documentoDestinatario = documentoDestinatarioInput.value;
    var tipoDeCuenta = tipoDeCuentaInput.value;
    var numeroCuenta = numeroCuentaInput.value;
    var banco = bancoInput.value;
    var montoTransferencia = parseFloat(montoTransferenciaInput.value);

    var sender = null; 
    var recipient = null; 
    
   
    for (var i = 0; i < users.length; i++) {
        if (users[i].documentNumber === senderDocumentNumber) {
            sender = users[i];
        }
        if (users[i].documentNumber === documentoDestinatario) {
            recipient = users[i];
        }
    }

    if (recipient) {
        if (sender && montoTransferencia <= sender.balance) {
            sender.balance -= montoTransferencia;
            recipient.balance += montoTransferencia;

            var balanceElement = document.querySelector('#saldo .saldo');
            balanceElement.textContent = sender.balance;

            
            nombreDestinatarioInput.value = '';
            documentoDestinatarioInput.value = '';
            tipoDeCuentaInput.value = '1'; 
            numeroCuentaInput.value = '';
            bancoInput.value = '0'; 
            montoTransferenciaInput.value = '';

            alert('Transferencia exitosa. Nuevo saldo: ' + sender.balance);
        } else {
            alert("No tiene suficiente saldo para realizar la transferencia.");
        }
    } else {
        alert("El documento del destinatario no se encontró en nuestros registros.");
    }
}





