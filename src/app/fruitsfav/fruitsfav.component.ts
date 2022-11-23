import { Component, OnInit,Input } from '@angular/core';

import { AppComponent } from '../app.component';
@Component({
  selector: 'app-fruitsfav',
  templateUrl: './fruitsfav.component.html',
  styleUrls: ['./fruitsfav.component.css']
})
export class FruitsfavComponent implements OnInit {
chart:any;
hidename=false;
hidenames=false;
hidelist=false;
@Input() name!:any;
names!:any;
@Input() namelist!:any;
  constructor() { 
    console.log(this.name);

  }

  ngOnInit(): void {
    this.name='snow,freeman,alicia';
    this.names='Bradley';
    this.namelist='Adalyn';
    console.log(this.name);
  }
list() {
  alert("link was clicked");
  this.hidename=true;
  console.log(this.name);
  //console.log('success');
  window.open('/countfruits');

}
submit() {
  this.name='snow,freeman,alicia';
  this.hidename=true;
  window.open('/countfruits');
}
listname() {
  alert("the link was clicked");
this.hidenames=true;

}
listfruits() {
  alert("the link was clicked");
this.hidelist=true;
}
 
  

}
