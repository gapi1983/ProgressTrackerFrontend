import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
      path: 'login', // Lazy-loaded route
      loadChildren: () =>
        import('./login/login.module').then((m) => m.LoginModule),
    },
    {
      path: 'register', // Lazy-loaded route
      loadChildren: () =>
        import('./register/register.module').then((m) => m.RegisterModule),
    },
    {
      path: 'forgot-password', // Lazy-loaded route
      loadChildren: () =>
        import('./forgot-password/forgot-password.module').then((m) => m.ForgotPasswordModule),
    },
    {
      path: 'reset-password', // Lazy-loaded route
      loadChildren: () =>
        import('./reset-password/reset-password.module').then((m) => m.ReserPasswordModule),
    },
    {
      path: '', // Default path redirects to 'login'
      redirectTo: 'login',
      pathMatch: 'full',
    },
    {
      path: '**', // Wildcard route for unknown paths
      redirectTo: 'login',
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
