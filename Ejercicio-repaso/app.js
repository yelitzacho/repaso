window.onload = function (){
    var nombre = document.getElementById("nombre-paciente");
    var apellido = document.getElementById("apellido-paciente");
    var edad = document.getElementById("edad-paciente");
    var genero = document.getElementById("genero-paciente");
    var ciudad = document.getElementById("ciudad-paciente");
    var pais = document.getElementById("pais-paciente");
    var objetoPaciente = JSON.parse(localStorage.getItem("nuevo-Paciente"));

    console.log(objetoPaciente);

    nombre.innerHTML = objetoPaciente.nombre;
    apellido.innerHTML = objetoPaciente.apellido;
    edad.innerHTML = objetoPaciente.edad;
    genero.innerHTML = objetoPaciente.genero;
    ciudad.innerHTML = objetoPaciente.ciudad;
    pais.innerHTML = objetoPaciente.pais;

}
