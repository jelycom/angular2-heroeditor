import {Component, Input} from "@angular/core";
import {Hero} from "./hero";
@Component({
    moduleId:module.id,
    selector:'my-hero-detail',
    template:`
           <div *ngIf="hero">
            <h2>{{hero.name}} Details</h2>
            <div><label>id:</label>{{hero.id}}</div>
            <div><label>name:</label>
            <input placeholder="name" [(ngModel)]="hero.name"/>
            </div>
        </div>
`
})
export class HeroDetailComponent{
    @Input()
    hero:Hero;
}