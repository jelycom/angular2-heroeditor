import { Component } from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h2>{{hero.name}} Details</h2>`,
})
export class AppComponent  {
  title = 'Tour Of Heroes';
  hero : Hero={
    id:1,
    name:'Windstorm'
  } ; }
