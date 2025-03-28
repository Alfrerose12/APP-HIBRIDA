import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'recomendaciones',
        loadChildren: () => import('../recomendaciones/recomendaciones.module').then( m => m.RecomendacionesPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'promociones',
        loadChildren: () => import('../promociones/promociones.module').then( m => m.PromocionesPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
