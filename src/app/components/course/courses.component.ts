import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/shared/services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  selectedCourse = null;
  
  courses = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.loadCourses();
  }

  resetSelectedCourse(){
    const emptyCourse = {
      id: null,
      title: "",
      description: "",
      percentComplete: 0,
      favorite: false,
    }
    this.selectedCourse = emptyCourse;
  }

  selectCourse(course){
    console.log('clicked course = ' , course.id, course.title, course.description);
  
   this.selectedCourse = course;
  }


  cancel(){
    this.resetSelectedCourse();
  }

  loadCourses(){
    this.coursesService.all()
   .subscribe(courses => this.courses = courses);
    
  }

  refreshCourses(){
    this.resetSelectedCourse();
    this.loadCourses();
  }

  saveCourse(course){

    if(course.id){
      this.coursesService.update(course)
      .subscribe(result => this.refreshCourses());
    } else {
      this.coursesService.create(course)
      .subscribe(result => this.refreshCourses());
    }
  }

  deleteCourse(courseId){
    this.coursesService.delete(courseId)
    .subscribe(result => this.loadCourses());
  }

}
