import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter.component';/*Revisar que se haga la importación del componente */

export const routes: Routes = [
    {
        /*Si path esta vacio, aparece component */
        path: '',/*Se pone la direccion que va a cargar el componente.Ej www.jfonseca.com/productos(o mombre de la ventana)*/
        component: CounterPageComponent,
    }
];
