import { Component } from "@angular/core"; /*administra las librerias*/

@Component ({
    /*Se usa solo template o style(sin Url) cuando la estructura es muy pequeña */
    templateUrl:'./crear-presupuesto.html', /*lo que se va a mostrar, estructura*/
    styleUrl: './crear-presupuesto.css',/*Estilos*/

})
export class CrearPresuPageComponent{
agregarPresupuesto(presupuesto: String) {
    const valor = Number(presupuesto)
  if (valor <= 0 ) {
    alert("Los datos ingresados son incorrectos");
    return;
  }
  // lógica para guardar
  console.log("Presupuesto agregado:", valor);
}
}