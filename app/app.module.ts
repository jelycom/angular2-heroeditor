import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroesComponent }  from './heroes.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";

@NgModule({
  imports:      [ BrowserModule ,FormsModule,RouterModule.forRoot([{path:'heroes',component:HeroesComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'',redirectTo:'/dashboard',pathMatch:'full'}])],
  declarations: [ AppComponent,HeroesComponent ,HeroDetailComponent,DashboardComponent],
  providers:[HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
