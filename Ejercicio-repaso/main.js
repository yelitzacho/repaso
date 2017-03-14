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

  ingresoButton.addEventListener('click',function(evento){
    evento.preventDefault()

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var edad = document.getElementById('edad').value;
    var genero = document.getElementById('genero').value;
    var ciudad = document.getElementById('ciudad').value;
    var pais = document.getElementById('pais').value;
    var registro = document.getElementById('registro');
    var ingreso = new  PacientesLab(nombre, apellido, edad, genero, ciudad, pais);
    paciente.push(ingreso); //
    registro.innerHTML= paciente[paciente.length -1].enfermo(); //

  });
});
