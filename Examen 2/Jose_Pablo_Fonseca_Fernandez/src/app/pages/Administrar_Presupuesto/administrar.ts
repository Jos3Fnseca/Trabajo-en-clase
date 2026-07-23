import { Component, inject,signal } from "@angular/core"; /*administra las librerias*/
import {  IngresarGComponent } from "../../components/ingresar_gasto/ingresar";
import { ListarComponent } from "../../components/listar_gasto/listar";
import { VariosService } from "../../service/servicios";

@Component ({
    /*Se usa solo template o style(sin Url) cuando la estructura es muy pequeña */
    templateUrl:'./administrar.html', /*lo que se va a mostrar, estructura*/
    imports: [IngresarGComponent, ListarComponent],
    //styleUrl: './administrar.css',/*Estilos*/

})
export class AdministrarPageComponent{
   public variosService = inject(VariosService);

}