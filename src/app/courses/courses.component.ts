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
    <div (click)="onDivClicked()">
      <!-- Class binding, Style binding & Event Binding -->
      <button class="btn btn-primary" [class.active]="isActive"
              [style.backgroundColor]="isActive ? 'blue' : 'white'"
              (click)="onSave($event)">Save
      </button>
    </div>
    <!-- Event filtering -->
    <input (keyup.enter)="onKeyUp()"/>
    <!-- Template variable -->
    <input #email (keyup.enter)="anotherKeyUp(email.value)"/>`
})
export class CoursesComponent {
  title = "List of courses";
  courses;
  imageUrl = "http://lorempixel.com/400/200"
  colSpan = 2;
  isActive = true;

  constructor(service: CoursesService) { // Dependency injection
    this.courses = service.getCourses();
  }

  onSave($event) {
    // Stop Event bubbling
    $event.stopPropagation();
    console.log("Button was cliked", $event);
  }

  onDivClicked() {
    console.log("Div was clicked")
  }

  onKeyUp() {
    console.log("ENTER was pressed");
  }

  anotherKeyUp(email) {
    console.log(email);
  }
}
