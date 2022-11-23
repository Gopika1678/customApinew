import { Component,OnInit } from '@angular/core';
import  fruits from 'src/Fruits.json';


//creating an interface 
interface FruitsData {
name:string;
FruitFav:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  fruitsData:FruitsData[]=fruits;
  public chart:any;
  customApi: any;
  constructor() {
    console.log(this.fruitsData);
  
    var count=0;

  }

  title = 'customApi';
  
  ngOnInit():void {
    this.customApi?.get('src/Fruits.json').subscribe((fruits: any)=>{
      console.log(fruits);
         })              
  }

    submitbtn() {
    alert("the button is clicked");
   window.open('/fruitsfav');
  }


  }
