import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './views/auth/pages/login/login.component';
import { RegisterComponent } from './views/auth/pages/register/register.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registrarse',
    component: RegisterComponent
  },
  {
    path: 'iniciar-sesion',
    component: LoginComponent
  },

  { path: '**', redirectTo:'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
