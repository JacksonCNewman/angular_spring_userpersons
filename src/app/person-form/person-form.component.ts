import { Component } from '@angular/core';
import {Person} from "../model/person";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonService} from "../service/person-service.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css'
})
export class PersonFormComponent {
  person: Person;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private personService: PersonService) {
    this.person = new Person;
  }

  onSubmit() {
    this.personService.save(this.person).subscribe(result => this.goToPersonList());
  }

  goToPersonList() {
    this.router.navigate(['/users']);
  }

}
