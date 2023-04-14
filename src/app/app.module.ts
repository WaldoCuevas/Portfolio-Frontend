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
import { IndexComponent } from './AuthComponent/index/index.component';
import { LoginComponent } from './AuthComponent/login/login.component';
import { RegisterComponent } from './AuthComponent/register/register.component';

//Componentes Secundarios + Angular Material
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './Utils/Interceptor/interceptor.service';



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
  ],
  imports: [
    BrowserModule,
    NgxHideOnScrollModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
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
    
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
