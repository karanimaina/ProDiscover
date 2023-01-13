import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CoursesComponent } from './courses/courses.component';
import { CardComponent } from './card/card.component';
import { FilterComponent } from './filter/filter.component';
import {FormsModule} from "@angular/forms";
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CoursesComponent,
    CardComponent,
    FilterComponent,
    SearchComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
