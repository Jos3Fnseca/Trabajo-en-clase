import { Component, input,computed} from "@angular/core";
import { Gasto } from "../../interface/gasto.interface";

@Component({
    selector: 'app-listar',
    imports:[],
    templateUrl:'./listar.html'
})

export class ListarComponent{
    restante= input.required<number>()
    gasto = input.required<Gasto[]>()
    listgasto = input.required<string>()

    restanteReal = computed(() => {
    const base = this.restante(); 
    const lista = this.gasto();    

    
    const totalGastado = lista
      .filter(g => g.gasto >= 0)
      .reduce((acc, item) => acc + item.gasto, 0);

    // Retornamos la resta final
    return base - totalGastado;
  });

}