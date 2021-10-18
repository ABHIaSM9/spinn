import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { PageNotFoundComponent } from './core/layout';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', pathMatch:'full', component:HomeComponent},
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'dashboard',
    canActivate:[AuthGuard],
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'user',
    canActivate:[AuthGuard],
    loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:"quiz",
    canActivate:[AuthGuard],
    loadChildren:()=>import('./quiz/quiz.module').then(m=>m.QuizModule)
  },
  {
    path:"admin",
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
