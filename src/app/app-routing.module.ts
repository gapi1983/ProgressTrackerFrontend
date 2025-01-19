import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
      path: 'login', 
      loadChildren: () =>
        import('./login/login.module').then((m) => m.LoginModule),
    },
    {
      path: 'register', 
      loadChildren: () =>
        import('./register/register.module').then((m) => m.RegisterModule),
    },
    {
      path: 'forgot-password',
      loadChildren: () =>
        import('./forgot-password/forgot-password.module').then((m) => m.ForgotPasswordModule),
    },
    {
      path: 'reset-password',
      loadChildren: () =>
        import('./reset-password/reset-password.module').then((m) => m.ReserPasswordModule),
    },
    {
      path:"confirm-email",
      loadChildren:()=>
        import('./confirm-account/confirm-account.module').then((m)=>m.ConfirmAccountModule),
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
