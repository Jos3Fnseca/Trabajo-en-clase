import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter.component';/*Revisar que se haga la importación del componente */
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { AnimeComponent } from './pages/anime/anime-page.component';

export const routes: Routes = [
    {
        /*Si path esta vacio, aparece component */
        path: '',/*Se pone la direccion que va a cargar el componente.Ej www.jfonseca.com/productos(o mombre de la ventana)*/
        component: CounterPageComponent,
    },
    {
        path:'hero',
        component: HeroPageComponent,
    },
    {
        path:'anime',
        component: AnimeComponent,
    }

];
