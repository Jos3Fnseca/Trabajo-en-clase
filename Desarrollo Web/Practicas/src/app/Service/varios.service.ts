import { effect, Injectable, signal } from "@angular/core";
import { Character } from "../interface/character.interface";

@Injectable({providedIn: "root"})
export class VariosService{
        characters = signal<Character[]>([
        {id:1, name:'Goku', power:9001},
        {id:2, name:'Vegeta',power:8000},

    ]);
    saveToLocalStorage = effect(()=>{
        console.log(`Conteo de Personajes ${this.characters().length}`);
        localStorage.setItem('Personajes',JSON.stringify(this.characters()));//para guardar en local stroge del navegador
    });
    addCharacter(character:Character){
        this.characters.update((list)=>[...list,character]);
}
    
}