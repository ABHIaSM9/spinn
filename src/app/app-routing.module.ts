import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'user',
    loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:"quiz",
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
