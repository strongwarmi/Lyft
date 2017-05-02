var formulario= document.querySelector(".form-signup");
formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  ValidaForm();
});
function ValidaForm(){
  var celular = document.getElementById("celular").value;
  var Celu = document.getElementById("Celu");
  var RegExCelu = /[9][0-9]{8}/ ;
  if( celular == null || celular.length == 0 || celular.length>9 ||(!RegExCelu.test(celular)) ) {
  Celu.innerHTML = "Numero de celular no válido debe contener 9 caracteres";
  }  
}
