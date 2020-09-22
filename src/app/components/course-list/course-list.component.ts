import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoursesService } from 'src/app/shared/services/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {

  @Input() courses;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  
}
