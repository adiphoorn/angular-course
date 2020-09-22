import { Component, OnInit } from '@angular/core';
import { LessonsService } from 'src/app/shared/services/lessons.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = 'Course content';
 
  currentLesson = "";
  lessons = null;

  

  constructor(private lessonsService:LessonsService) { }

  ngOnInit(): void {
   this.lessons = this.lessonsService.all();
  }

 

  selectLesson(lesson){
    console.log('clicked lesson = ' , lesson.title);
  
   this.currentLesson = lesson.title;
  }

}

export interface Lesson{
  title: string;

}
