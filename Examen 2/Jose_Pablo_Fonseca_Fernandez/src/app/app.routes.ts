import { Routes } from '@angular/router';
import { CrearPresuPageComponent } from './pages/Crear_Presupuesto/crear-presupuesto';
import { AdministrarPageComponent } from './pages/Administrar_Presupuesto/administrar';

export const routes: Routes = [
    {
        path: 'crear',
        component: CrearPresuPageComponent
    },
    {
        path:'',
        component: AdministrarPageComponent
    }
];
