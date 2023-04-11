import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { HeroComponent } from './Componentes/hero/hero.component';
import { AboutMeComponent } from './Componentes/about-me/about-me.component';
import { TechnologysComponent } from './Componentes/technologys/technologys.component';
import { EducationsComponent } from './Componentes/educations/educations.component';
import { ExpWorkComponent } from './Componentes/exp-work/exp-work.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { ProjectsComponent } from './Componentes/projects/projects.component';


// Rutas aqui ->>
const routes: Routes = [
  //index
  { path:"", component:HeroComponent},

  // secciones
  { path:"hero", component:HeroComponent},
  { path:"login", component: LoginComponent },
  { path:"about-me", component: AboutMeComponent },
  { path:"exp", component: TechnologysComponent },
  { path:"education", component: EducationsComponent },
  { path:"exp-work", component: ExpWorkComponent },
  { path:"skills", component: SkillsComponent },
  { path:"projects", component: ProjectsComponent },

  //login
  { path:"login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
