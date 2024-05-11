import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PersonListComponent} from "./person-list/person-list.component";
import {PersonFormComponent} from "./person-form/person-form.component";

export const routes: Routes = [
  { path: 'users', component: PersonListComponent },
  { path: 'addUser', component: PersonFormComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
