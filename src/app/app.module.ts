import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsComponent } from './components/items/items.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/course/courses.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursesService } from './shared/services/courses.service';
import { LessonsService } from './shared/services/lessons.service';
import { HttpClientModule } from '@angular/common/http';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { LessonListComponent } from './components/lesson-list/lesson-list.component';
import { ColorsComponent } from './components/colors/colors.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HomeComponent,
    CoursesComponent,
    CourseDetailsComponent,
    CourseListComponent,
    LessonListComponent,
    ColorsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    CoursesService, LessonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
