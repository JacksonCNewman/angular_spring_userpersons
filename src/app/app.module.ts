import { NgModule } from '@angular/core';
import {AppComponent} from "./app.component";
import {PersonListComponent} from "./person-list/person-list.component";
import {PersonFormComponent} from "./person-form/person-form.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {PersonService} from "./service/person-service.service";

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
