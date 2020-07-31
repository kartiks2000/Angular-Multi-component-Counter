import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;

  incre(){
    this.counter += 1;
  }

  decre(){
    this.counter -= 1;
  }

  reset(){
    this.counter = 0;
  }
}  
