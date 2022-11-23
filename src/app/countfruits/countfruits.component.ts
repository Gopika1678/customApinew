import { Component, OnInit,Input } from '@angular/core';
import { FruitsfavComponent } from '../fruitsfav/fruitsfav.component';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-countfruits',
  templateUrl: './countfruits.component.html',
  styleUrls: ['./countfruits.component.css']
})
export class CountfruitsComponent implements OnInit {
count:number;
  countorange:number;
  @Input() name:string;
  @Input() names:string;
  

  constructor() {
    console.log('hello');
    this.name='Apples';
    this.names='Oranges';
    this.count=3;
    this.countorange=1;
   }

  ngOnInit(): void {
  //  this.name='Mango';
    console.log(this.name);
    console.log(this.names);
  }


}
