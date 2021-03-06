import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
            <hr>
            <h1>{{ title }} </h1>
            <h2>My Heroes</h2>
            <ul class="heroes">
              <li *ngFor="let hero of heroes" 
              [class.selected]="hero === selectedHero" 
              (click)="onSelect(hero)">
              <span class="badge"> {{ hero.id }}</span> {{ hero.name }}

              </li>
            </ul>
            <div *ngIf="selectedHero">
              <h2>{{ selectedHero.name }} details!</h2>
              <div><label>id:</label>{{ selectedHero.id }}</div>
              <div>
                  <label>name:</label>
                  <input [(ngModel)]="selectedHero.name" placeholder="name"/>
              </div>
            </div>
            
            
            `,
  styles: [`
            .selected {
              background-colour: #CFD8DC !important;
              color: white;
            }
            .heroes {
              margin: 0 0 2em 0;
              list-style-type: none;
              padding: 0;
              width: 15em;
            }
            .heroes li {
              cursor: pointer;
              position: relative;
              left: 0;
              background-color: #EEE;
              margin: .5em;
              padding: .3em 0;
              height:1.6em;
              border-radius:4px;
            }
            .heroes li.selected:hover {
              background-color:#BBD8BC !important;
              color: white;
            }
            .heroes li:hover {
              color: #607D8B;
              background-color: #DDD;
              left: .1em;
            }
            .heroes .text {
              position: relative;
              top: -3px;
            }
            .heroes .badge {
              display: inline-block;
              font-size: small;
              color: white;
              padding: 0.8em 0.7em 0 0.7em;
              background-color: #607D8B;
              line-height: 1em;
              position: relative;
              left: -1px;
              top: -4px;
              height: 1.8em;
              margin-right: .8em;
              border-radius: 4px 0 0 4px;
            }
            `]
})



export class AppComponent  { 
  name = 'Angular Welcome Tejas';
  title = 'Tour of Heroes';
  //hero = 'Windstorm';
  he: Hero = {
  id: 1,
  name: 'Tejas'
  };
  selectedHero: Hero;
  heroes = HEROES;

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }


 }


const HEROES:Hero[]=[{id:11,name: 'Sai'},
{id:12,name: 'Pavamana'},
{id:13,name: 'Tejas'},
{id:14,name: 'Om'},
{id:15,name: 'Hello'},
];


export class Hero{
  id: number;
  name: string;
}

