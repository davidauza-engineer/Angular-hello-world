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
    <!-- <input [value]="email" (keyup.enter)="anotherKeyUp()"/> -->
    <!-- ngModel is a Directive to implement Two-way Binding -->
    <input [(ngModel)]="email"
           (keyup.enter)="anotherKeyUp()"/>
    <!-- Pipes -->
    <br/><br/>{{ course.title | uppercase | lowercase}} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating| number:'1.2-2'}} <br/>
    {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
    {{ course.releaseDate | date:'shortDate'}}
    <br/><br/>{{ text | summary:10 }}`
})
export class CoursesComponent {
  title = "List of courses";
  courses;
  imageUrl = "http://lorempixel.com/400/200"
  colSpan = 2;
  isActive = true;
  email = 'me@example.com';
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }
  text = "She exposed painted fifteen are noisier mistake led waiting. " +
    "Surprise not wandered speedily husbands although yet end. Are court " +
    "tiled cease young built fat one man taken. We highest ye friends is " +
    "exposed equally in. Ignorant had too strictly followed. Astonished " +
    "as travelling assistance or unreserved oh pianoforte ye. Five with " +
    "seen put need tore add neat. Bringing it is he returned received " +
    "raptures. \n";

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

  anotherKeyUp() {
    console.log(this.email);
  }
}
