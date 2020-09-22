import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  private lessons = [ 
    { title : 'Hello Angular'},
    { title : 'Component Fundamentals'},
    { title : 'Template driven forms'},
    { title : 'Angular services'},
    { title : 'Server communication'},
    { title : 'Angular routing'},
    { title : 'Angular templates'}, 
    { title : 'Angular material'},
    { title : 'Greetings from lessonService'}
   
  ];

  constructor() { }

  all(){
    return this.lessons;
  }


}
