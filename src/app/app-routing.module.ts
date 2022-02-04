import { ClasseComponent } from './classe/classe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FiliereComponent } from './filiere/filiere.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { LogoutComponent } from './logout/logout.component';

//const routes: Routes = [];
const routes: Routes = [
  {path:'filiere',component:FiliereComponent},
  {path:'classes',component:ClasseComponent},
  {path:'admin',component:AdminComponent},
  {path:'user',component:UserComponent},
  {path:'logout',component:LogoutComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
