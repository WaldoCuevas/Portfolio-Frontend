import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { HeroComponent } from './Componentes/hero/hero.component';
import { TechnologysComponent } from './Componentes/technologys/technologys.component';
import { ExpWorkComponent } from './Componentes/exp-work/exp-work.component';
import { ProjectsComponent } from './Componentes/projects/projects.component';
import { LoginComponent } from './AuthComponent/login/login.component';
import { RegisterComponent } from './AuthComponent/register/register.component';
import { IndexComponent } from './AuthComponent/index/index.component';

//Utils
import { GuardGuard as guard} from './Utils/Guard/guard.guard';
import { NotFoundComponent } from './not-found/not-found.component';


// Rutas aqui ->>
const routes: Routes = [
  
  //login
  { path:"login", component: LoginComponent },
  { path:"register", component: RegisterComponent },
  
  // secciones
  { path:"hero", component:HeroComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user']}},
  { path:"technology", component: TechnologysComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user']} },
  { path:"exp", component: ExpWorkComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user']} },
  { path:"project", component: ProjectsComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user']} },
  
  //index
  { path: '', pathMatch: 'full', component: IndexComponent },

  //not-found
  { path: '**',component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
