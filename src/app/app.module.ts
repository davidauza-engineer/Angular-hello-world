import { CoursesComponent } from './courses/courses.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SummaryPipe } from './summary.pipe'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component'
import { AuthorsService } from './authors.service';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
