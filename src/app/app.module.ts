//Componentes Principales
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//Componentes PortFolio en orden asc.
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { HeroComponent } from './Componentes/hero/hero.component';
import { AboutMeComponent } from './Componentes/about-me/about-me.component';
import { TechnologysComponent } from './Componentes/technologys/technologys.component';
import { EducationsComponent } from './Componentes/educations/educations.component';
import { ExpWorkComponent } from './Componentes/exp-work/exp-work.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { ProjectsComponent } from './Componentes/projects/projects.component';
import { ContactComponent } from './Componentes/contact/contact.component';
import { FooterComponent } from './Componentes/footer/footer.component';

//Componentes Auth
import { LoginComponent } from './AuthComponent/login/login.component';
import { RegisterComponent } from './AuthComponent/register/register.component';
import { IndexComponent } from './AuthComponent/index/index.component'; 
import { NotFoundComponent } from './not-found/not-found.component';

//Librerias
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './Utils/Interceptor/interceptor.service';

// Ng-Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//View Component
import { HomeComponent } from './ViewComponent/home/home.component';
import { KnowSkillComponent } from './ViewComponent/know-skill/know-skill.component';
import { EducationWorkExpComponent } from './ViewComponent/education-work-exp/education-work-exp.component'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent,
    EducationsComponent,
    ExpWorkComponent,
    ProjectsComponent,
    SkillsComponent,
    TechnologysComponent,
    AboutMeComponent,
    ContactComponent,
    RegisterComponent,
    IndexComponent,
    HomeComponent,
    KnowSkillComponent,
    EducationWorkExpComponent,
  ],
  imports: [
    BrowserModule,
    NgxHideOnScrollModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    }),
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
