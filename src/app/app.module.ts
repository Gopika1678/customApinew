import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FruitsfavComponent } from './fruitsfav/fruitsfav.component';
import { CountfruitsComponent } from './countfruits/countfruits.component'

 

@NgModule({
  declarations: [
    AppComponent,
    FruitsfavComponent,
    CountfruitsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
