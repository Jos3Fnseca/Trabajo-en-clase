import { effect, Injectable, signal } from "@angular/core";
import { Gasto } from "../interface/gasto.interface";

@Injectable({providedIn: "root"})
export class VariosService{
        GastosA = signal<Gasto[]>([
        { nombre:'Supermercado', gasto:1000}

    ]);
    restante = signal(2000)
    
    saveToLocalStorage = effect(()=>{
        console.log(`Conteo de Gastos ${this.GastosA().length}`);
        //localStorage.setItem('Personajes',JSON.stringify(this.GastosA()));//para guardar en local stroge del navegador
    });
    addGasto(gasto:Gasto){
        this.GastosA.update((list)=>[...list,gasto]);
        
}
    
}