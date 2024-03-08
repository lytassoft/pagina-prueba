import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () =>
      import('./pages/pages-inicio/pages-inicio.component').then(
        (m) => m.PagesInicioComponent
      ),
  },
  {
    path: 'producto',
    loadComponent: () =>
      import('./pages/pages-producto/pages-producto.component').then(
        (c) => c.PagesProductoComponent
      ),
  },
  {
    path: '',
    redirectTo: 'producto',
    pathMatch: 'full',
  },
];
