import {Component} from '@angular/core';
import {CoursesService} from '../courses.service'

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <!-- Property binding -->
    <img [src]="imageUrl"/>
  <table>
    <tr>
      <td [attr.colspan]="colSpan"></td>
    </tr>
  </table>
  <button class="btn btn-primary">Save</button>`
})
export class CoursesComponent {
  title = "List of courses";
  courses;
  imageUrl = "http://lorempixel.com/400/200"
  colSpan = 2;

  constructor(service: CoursesService) { // Dependency injection
    this.courses = service.getCourses();
  }
}
