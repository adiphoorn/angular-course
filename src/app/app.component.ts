import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Website';

  links=[ 
   { path: '/home', icon: 'home', title: 'Home'},
    { path: '/courses', icon: 'view_list', title: 'Courses'},
    { path: '/colors', icon: 'favorite' , title: "Colors"},
   { path: '**', redirectTo: '/home'}
  ];

  constructor(){
    
  }
 

}
