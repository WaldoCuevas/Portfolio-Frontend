//Componentes Principales
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//Componentes para el PortFolio en orden asc.
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { HeroComponent } from './Componentes/hero/hero.component';
import { SobreMiComponent } from './Componentes/sobre-mi/sobre-mi.component';
import { ExperienciasComponent } from './Componentes/experiencias/experiencias.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { ExperienciasLaboralesComponent } from './Componentes/experiencias-laborales/experiencias-laborales.component';
import { HabilidadesComponent } from './Componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { FooterComponent } from './Componentes/footer/footer.component';

//Componentes para el Login
import { IniciarSesionComponent } from './Componentes/Login/iniciar-sesion/iniciar-sesion.component';
import { RegistrarComponent } from './Componentes/Login/registrar/registrar.component';
import { ListaUsuariosComponent } from './Componentes/Login/lista-usuarios/lista-usuarios.component';

//Componentes Secundarios
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    SobreMiComponent,
    ExperienciasComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    IniciarSesionComponent,
    RegistrarComponent,
    ListaUsuariosComponent,
    ExperienciasLaboralesComponent
  ],
  imports: [
    BrowserModule,
    NgxHideOnScrollModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
