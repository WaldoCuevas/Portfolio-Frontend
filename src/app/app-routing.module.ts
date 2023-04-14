import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './Componentes/hero/hero.component';
import { AboutMeComponent } from './Componentes/about-me/about-me.component';
import { TechnologysComponent } from './Componentes/technologys/technologys.component';
import { EducationsComponent } from './Componentes/educations/educations.component';
import { ExpWorkComponent } from './Componentes/exp-work/exp-work.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { ProjectsComponent } from './Componentes/projects/projects.component';
import { LoginComponent } from './AuthComponent/login/login.component';
import { RegisterComponent } from './AuthComponent/register/register.component';
import { IndexComponent } from './AuthComponent/index/index.component';
import { GuardGuard as guard} from './Utils/Guard/guard.guard';
import { NotFoundComponent } from './not-found/not-found.component';


// Rutas aqui ->>
const routes: Routes = [
  
  //login
  { path:"login", component: LoginComponent },
  { path:"register", component: RegisterComponent },
  
  // secciones
  { path:"hero", component:HeroComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user']}},
  { path:"about-me", component: AboutMeComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user']} },
  { path:"exp", component: TechnologysComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user']} },
  { path:"education", component: EducationsComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user']} },
  { path:"exp-work", component: ExpWorkComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user']} },
  { path:"skills", component: SkillsComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user']} },
  { path:"projects", component: ProjectsComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user']} },
  
  //index
  { path: 'index', pathMatch: "full", component: IndexComponent },
  { path: '', pathMatch: 'full', component: IndexComponent },

  //not-found
  { path: '**',component: NotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
