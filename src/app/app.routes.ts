import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () =>
      import('./pages/pages-inicio/pages-inicio.component').then(
        (m) => m.PagesInicioComponent
      ),
  },
];
