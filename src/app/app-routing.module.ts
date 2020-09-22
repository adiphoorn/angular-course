import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/course/courses.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent},
  { path: 'courses' , component: CoursesComponent},
  { path : '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
