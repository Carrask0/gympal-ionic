import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full',
  },
  {
    path: 'principal',
    loadComponent: () => import('./pages/principal/principal.page').then( m => m.PrincipalPage)
  },
  {
    path: 'estadisticas',
    loadComponent: () => import('./pages/estadisticas/estadisticas.page').then( m => m.EstadisticasPage)
  },
  {
    path: 'sesion',
    loadComponent: () => import('./pages/sesion/sesion.page').then( m => m.SesionPage)
  },
  {
    path: 'estadisticas-ejercicio',
    loadComponent: () => import('./pages/estadisticas-ejercicio/estadisticas-ejercicio.page').then( m => m.EstadisticasEjercicioPage)
  },
  {
    path: 'buscar-ejercicio',
    loadComponent: () => import('./pages/buscar-ejercicio/buscar-ejercicio.page').then( m => m.BuscarEjercicioPage)
  },
];
