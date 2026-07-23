import { Component, output,input, signal} from "@angular/core";
import { Gasto } from "../../interface/gasto.interface";

@Component({
    selector: 'app-ingresar',
    imports:[],
    templateUrl: './ingresar.html'
})

export class IngresarGComponent{
    nombre = signal('');
    gasto = signal(0);
    restante = output<number>();
    newGasto = output<Gasto>();
    addGasto(){
    if(!this.nombre() || !this.gasto() || this.gasto() <= 0){
        return;
    }
    
    const newGasto: Gasto = {
        nombre: this.nombre(),
        gasto: this.gasto()
    }
    this.newGasto.emit(newGasto);
    console.log({newGasto});
    this.resetFields();
 
}

    resetFields(){
        this.nombre.set(''),
        this.gasto.set(0)
    }
    agregarPresupuesto(gasto: String, nombre: string) {
    const valor = Number(gasto), valor2 = nombre
  if (valor <= 0 || valor2 == "") {
    alert("Valores de gasto incorrecto");
    return;
  }
  // lógica para guardar
  console.log("Presupuesto agregado:", valor);
}


}