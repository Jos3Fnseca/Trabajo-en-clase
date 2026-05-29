import { Component, signal } from "@angular/core"; /*administra las librerias*/

@Component ({
    /*Se usa solo template o style(sin Url) cuando la estructura es muy pequeña */
    templateUrl:'./counter.component.html', /*lo que se va a mostrar, estructura*/
    styleUrl: './counter.component.css',/*Estilos*/

})
export class CounterPageComponent{
    contador = 10;
    contadorSignal = signal(5);/*Vallor inicial de Signal dentro de los parentesis */
    increaseBy(value: number){
        this.contador += value;
        this.contadorSignal.set(this.contadorSignal()+value);
    }
    reset(){
        this.contador = 10;
        this.contadorSignal.set(5);
    }
}