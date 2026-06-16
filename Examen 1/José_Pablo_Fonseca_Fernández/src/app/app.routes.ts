import { Routes } from '@angular/router';
import { AdministrarPageComponent } from './pages/administrar presupuesto/administrar.component';
import { VerPageComponent } from './pages/ver listado de saldo/ver.component';
import { CrearPageComponent } from './pages/crear presupuesto/crear.component';

export const routes: Routes = [
    {
        path: '',
        component: VerPageComponent
    },
    {
        path:'crear',
        component: CrearPageComponent
    },
    {
        path: 'administrar',
        component: AdministrarPageComponent
    }
];
