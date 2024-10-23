import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { StudiesComponent } from './main/services/studies.component';
import { WorkComponent } from './main/work/work.component';
import { ContactComponent } from './main/contact/contact.component';
import {NgClickOutsideDirective} from 'ng-click-outside2';
import { ScrollSpyModule } from 'ng-spy';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    StudiesComponent,
    WorkComponent,
    ContactComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    ScrollSpyModule,
    NgClickOutsideDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
