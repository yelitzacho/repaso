/*
En la Clínica Lab necesitan crear un informe con los datos de los pacientes registrados.
Para esto, se debe escribir una función que reciba como los inputs de nombre, apellido, edad, genero, ciudad y país.
Cree un objeto basado en constructor asignando los parámetros entregados como propiedades y agregue un método
del objeto llamado ficha que retorne la ficha del paciente con su nombre, apellido, edad y país.

Ejemplo:
Input:
    nombre = "Blanca"
    apellido = "Pérez"
    edad = 19
    genero = "Femenino"
    ciudad = "Santiago"
    pais = "Chile"
Output(en el HTML):
    "Nombre: Blanca Pérez"
    "Edad: 19"
    "País: Chile"
-TIP: elabora un formulario para obtener todos los datos de los pacientes, después, por cada paciente crea un
nuevo objeto que esté almecenado en un array
-TIP 2: por cada paciente nuevo que se ingrese crea un div sonde estén contenidos sus datos :)

*/

window.addEventListener ('load',function(){
  var ingresoButton = document.getElementById('ingreso');

  function PacientesLab(nombre,apellido,edad,genero,ciudad,pais){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.ciudad = ciudad;
    this.pais = pais;
    this.enfermo= function (){
      return ("<br>Nombre: " + this.nombre + this.apellido +
              "<br>Edad: " + this.edad +
              "<br>País: " + this.pais);
    }
  }

  var paciente = []; // Variable en donde se guardaran los datos ingresados
  var nombre = document.getElementById('nombre');
  var apellido = document.getElementById('apellido');
  var edad = document.getElementById('edad');
  var genero = document.getElementById('genero');
  var ciudad = document.getElementById('ciudad');
  var pais = document.getElementById('pais');
  var registro = document.getElementById('registro');

  ingresoButton.addEventListener('click',function(evento){
    evento.preventDefault()

    var ingreso = new  PacientesLab(nombre.value, apellido.value, edad.value, genero.value, ciudad.value, pais.value);
    paciente.push(ingreso);
    console.log (ingreso);
    registro.innerHTML += paciente[paciente.length -1].enfermo();

  });

  var Letras = function (evento){
    var name = evento.keyCode;
    console.log (name);
    if ((name >= 65  && name <= 90) || (name >= 97 && name <= 122) || name == 32 ){
      return true;
    } else {
      return false;
    }
  }

  var Numeros = function(evento){
    var age = evento.keyCode;
    if(age >= 48 && age <=57){
      return true;
    } else {
      return false;
    }
  }

  nombre.onkeypress = Letras;
  apellido.onkeypress = Letras;
  edad.onkeypress = Numeros;
  genero.onkeypress = Letras;
  ciudad.onkeypress = Letras;
  pais.onkeypress = Letras;

});
