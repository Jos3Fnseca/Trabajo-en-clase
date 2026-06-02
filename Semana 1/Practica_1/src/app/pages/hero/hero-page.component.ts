import { Component, signal } from "@angular/core";

@Component({
    selector: 'app-hero-page',
    templateUrl: "./hero-page.component.html",
    styleUrl: "./hero-page.component.css",
})

export class HeroPageComponent {
    name: string = "peter";
    age = 16;
    descripcion: string= "La descripcion de peter es: alto, delgado, pelo castaño.";
    getHeroDescription(){
         return this.descripcion;
    }

    cname(Newname: string){
     this.name = Newname;
    }
    cage(newage: number){
     this.age = newage;
    }
    reset(){
        this.age = 16;
        this.name = "peter"
    }
}