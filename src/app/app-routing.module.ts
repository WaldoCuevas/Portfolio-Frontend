import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ProjectsComponent } from './Componentes/projects/projects.component';
import { LoginComponent } from './AuthComponent/login/login.component';
import { RegisterComponent } from './AuthComponent/register/register.component';
import { IndexComponent } from './AuthComponent/index/index.component';

//Utils
import { GuardGuard as guard} from './Utils/Guard/guard.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './ViewComponent/home/home.component';
import { KnowSkillComponent } from './ViewComponent/know-skill/know-skill.component';
import { EducationWorkExpComponent } from './ViewComponent/education-work-exp/education-work-exp.component';


// Rutas aqui ->>
const routes: Routes = [
  
  //login
  { path:"login", component: LoginComponent },
  { path:"register", component: RegisterComponent },
  
  // secciones
  { path:"home", component:HomeComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user']}},
  { path:"know-skill", component: KnowSkillComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user']} },
  { path:"education-expwork", component: EducationWorkExpComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user']} },
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
