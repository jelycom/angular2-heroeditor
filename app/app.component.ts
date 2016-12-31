import { Component } from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
            <h2>{{hero.name}} Details</h2>
            <div><label>id:</label>{{hero.id}}</div>
            <div><label>name:</label>
            <input placeholder="name" [(ngModel)]="hero.name"/>
            </div>
`,
})
export class AppComponent  {
  title = 'Tour Of Heroes';
  hero : Hero={
    id:1,
    name:'Windstorm'
  } ; }
