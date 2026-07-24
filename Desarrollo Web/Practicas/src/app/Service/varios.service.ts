import { effect, Injectable, signal } from "@angular/core";
import { Character } from "../interface/character.interface";

const loadFromLocalStorage = (): Character[]=>{
    const characters = localStorage.getItem('Personajes');
    return characters ? JSON.parse(characters): [];
}

@Injectable({providedIn: "root"})
export class VariosService{
        characters = signal<Character[]>(loadFromLocalStorage());
    saveToLocalStorage = effect(()=>{
        //()=> significa autoejecute una función anonima
        //efecto=lo que quiero que se ejectute cuando pasa algun efecto
        //en este caso, cuando se agrega un personaje se guarda en el local storage
        console.log(`Conteo de Personajes ${this.characters().length}`);
        localStorage.setItem('Personajes',JSON.stringify(this.characters()));//para guardar en local stroge del navegador
    });
    addCharacter(character:Character){
        this.characters.update((list)=>[...list,character]);
}
    
}