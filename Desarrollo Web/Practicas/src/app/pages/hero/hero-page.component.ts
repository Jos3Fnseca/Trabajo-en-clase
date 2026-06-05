import { Component, signal } from "@angular/core";

@Component({
    templateUrl: "./hero-page.component.html",
    styleUrl: "./hero-page.component.css",
})

export class HeroPageComponent {
    name = signal("Tony Stark");
    age = signal(47);
    getHeroDescription(){
         return '${this.name()} - ${this.age()}';
    }

    changeHero(){
     this.name.set('Spiderman');
     this.age.set(16);
    }
    changeAge(){
     this.age.set(27);
    }
    resetForm(){
        this.name.set('Tony Stark');
        this.age.set(47);
    }
}