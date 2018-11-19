import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit {
  adults: number;
  teenagers: number;
  children: number;
  size: string;
  total: number = 0;

  constructor() { }

  ngOnInit() {
    this.adults = 0;
    this.teenagers = 0;
    this.children = 0;
  }

  calcTotalPizza(size: string, adults: string, teenagers: string, children: string): number {
    let areaOfPizza = this.getAreaOfPizza(size);
    let areaNeeded: number = ( this.makeANum(adults) * 50 ) + ( this.makeANum(teenagers) * 75 ) + ( this.makeANum(children) * 25 );
    
    return this.total = Math.ceil( areaNeeded / areaOfPizza );

  }

  makeANum(input: any): number {
    if(input == "") { input = 0; }
    return parseInt(input);
  }

  getAreaOfPizza(size: string): number {
    let areaOfPizza: number = null;

    switch(size) {
      case '8': {
          areaOfPizza = 50;
          break;
      }
      case '12': {
          areaOfPizza = 113;
          break;
      }
      case '14': {
          areaOfPizza = 154;
          break;
      }
      case '16': {
          areaOfPizza = 201;
          break;
      }
      case '18': {
          areaOfPizza = 255;
          break;
      }
    }

    return areaOfPizza;
  }

}
