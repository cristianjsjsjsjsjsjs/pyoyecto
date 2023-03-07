function login() {
var user, pass;

    user = document.getElementById("Usuario").value;
    pass = document.getElementById("Contraseña").value;
 
    
         if (user == "Luis" && pass == "12345"){

      
            window.location = "html/Usuario 1.HTML";
       
    }

        if (user == "Daniel" && pass == "123456"){

      
            window.location = "html/Usuario.HTML";
       
    }
      if (user == "Cristhel" && pass == "12345678"){

      
            window.location = "html/Usuario 3.HTML";
       
    }
    else{
        alert("Porfavor ingrese, nombre de usuario y contraseña.");
    }
    }

