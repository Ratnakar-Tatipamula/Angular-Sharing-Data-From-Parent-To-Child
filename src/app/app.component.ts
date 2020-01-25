import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  parentMessage1 = "I am passed from Parent to Child";
  parentMessage2 = "Data is passed from Parent to Child";
  

}
