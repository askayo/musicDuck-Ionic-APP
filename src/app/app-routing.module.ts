import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { Injectable } from '@angular/core';
// On rajoute le Router
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./player/player.module').then( m => m.PlayerPageModule)
  },
  {
    path: 'home/capture',
    loadChildren: () => import('./capture/capture.module').then( m => m.CapturePageModule)
  },
  {
    path: 'home/compte',
    loadChildren: () => import('./compte/compte.module').then( m => m.ComptePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // Dans le constructeur on déclare notre variable de routage
  constructor(private router: Router) {
  }

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let userAuthenticated = true; // Pour le moment nous allons garder cette valeur à false

    if (userAuthenticated) {
      // Déjà connecté : on redirige l'utilisateur vers la page d'accueil
      return true;
    } else {
      // return false;
      // Non connecté : on redirige l'utilisateur vers la page de Login
      this.router.navigate(['']);
    }
  }
}
