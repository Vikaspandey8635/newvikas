import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from 'src/app/_shared/guards/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },

  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [AuthGuard],
  },

  {
    path: '',
    loadChildren: () =>
      import('./console/console.module').then((m) => m.ConsoleModule),
    canActivate: [AuthGuard],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
