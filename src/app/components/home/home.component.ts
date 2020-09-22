import { Component, OnInit } from '@angular/core';
import { LessonsService } from 'src/app/shared/services/lessons.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = 'Course content';
  themeColor = '#3F51B5';
  backgroundColor = '#FF4081';
  currentLesson = "";
  lessons = null;

  

  constructor(private lessonsService:LessonsService) { }

  ngOnInit(): void {
   this.lessons = this.lessonsService.all();
  }

  updateColor(){

   console.log("the most beautiful color of the world is " + this.themeColor);
   this.themeColor = 'salmon';

  }

  selectLesson(lesson){
    console.log('clicked lesson = ' , lesson.title);
  
   this.currentLesson = lesson.title;
  }

}

export interface Lesson{
  title: string;

}
