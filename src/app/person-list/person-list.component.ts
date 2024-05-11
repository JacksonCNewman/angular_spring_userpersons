import { Component } from '@angular/core';
import {Person} from "../model/person";
import {PersonService} from "../service/person-service.service";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent {

  persons: Person[];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.findAll().subscribe(data => {
      this.persons = data;
    })
  }
}
