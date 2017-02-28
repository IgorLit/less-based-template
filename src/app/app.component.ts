import {Component} from "@angular/core";

@Component({
  selector: "x",
  templateUrl: "./app/app.component.html"
})
export class AppComponent  {
  name:string;
  constructor(){
    this.name="My name";
  }
}