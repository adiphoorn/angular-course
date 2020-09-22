import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  title = "Colors of the world";

  themeColor = '#3F51B5';
  backgroundColor = '#FF4081';

  constructor() { }

  ngOnInit(): void {
  }

  updateColor(){

    console.log("the most beautiful color of the world is " + this.themeColor);
    this.themeColor = 'salmon';
 
   }

}
