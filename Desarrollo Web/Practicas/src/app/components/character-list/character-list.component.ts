import { Component, input} from "@angular/core";
import { Character } from "../../interface/character.interface";

@Component({
    selector: 'app-character-list',
    imports:[],
    templateUrl:'./character-list.component.html'
})

export class CharacterListComponent{
    characters = input.required<Character[]>()
    listName = input.required<string>()
}