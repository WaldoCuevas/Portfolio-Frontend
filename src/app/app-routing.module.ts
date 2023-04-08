import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { HeroComponent } from './Componentes/hero/hero.component';
import { SobreMiComponent } from './Componentes/sobre-mi/sobre-mi.component';
import { ExperienciasComponent } from './Componentes/experiencias/experiencias.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { ExperienciasLaboralesComponent } from './Componentes/experiencias-laborales/experiencias-laborales.component';
import { HabilidadesComponent } from './Componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';


// Rutas aqui ->>
const routes: Routes = [
  //index
  { path:"", component:HeroComponent},

  // secciones
  { path:"hero", component:HeroComponent},
  { path:"login", component: LoginComponent },
  { path:"about-me", component: SobreMiComponent },
  { path:"exp", component: ExperienciasComponent },
  { path:"education", component: EducacionComponent },
  { path:"exp-work", component: ExperienciasLaboralesComponent },
  { path:"skills", component: HabilidadesComponent },
  { path:"projects", component: ProyectosComponent },

  //login
  { path:"login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
