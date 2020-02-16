import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
        {
        path: 'capture',
        children: [
          {
            path: 'home/capture',
            loadChildren: () => import('../capture/capture.module').then( m => m.CapturePageModule)
          }
        ]
      },
      {
        path: 'compte',
        children: [
          {
            path: 'home/compte',
            loadChildren: () => import('../compte/compte.module').then( m => m.ComptePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
