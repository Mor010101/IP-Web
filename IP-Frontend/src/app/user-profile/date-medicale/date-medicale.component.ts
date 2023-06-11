import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  faCoffee,
  faPlus,
  faSquarePlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/api/services';

@Component({
  selector: 'app-date-medicale',
  templateUrl: './date-medicale.component.html',
  styleUrls: ['./date-medicale.component.css'],
})
export class DateMedicaleComponent implements OnInit {
  @Input() userId: string = '';

  istoricMedical: Array<String> = new Array<String>();
  alergii: Array<String> = new Array<String>();
  consultatiiCardio: Array<String> = new Array<String>();
  plus = faPlus;
  trash = faTrash;

  //whole lotta forms
  cardioForm = this.formBuilder.group({
    cardioInput: ['', Validators.required],
  });

  istoricForm = this.formBuilder.group({
    istoricInput: ['', Validators.required],
  });

  alergiiForm = this.formBuilder.group({
    alergieInput: ['', Validators.required],
  });

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  getUser() {
    this.userService
      .apiUserIdGet$Json({ id: this.userId })
      .subscribe((user) => {
        this.istoricMedical = user.istoricMedical as Array<String>;
        this.alergii = user.alergii as Array<String>;
        this.consultatiiCardio = user.consulatiiCardio as Array<String>;
      });
  }

  ngOnInit() {
    this.getUser();
  }

  addIstoric() {
    let istoricString = this.istoricForm.get('istoricInput')?.value as string;

    this.userService
      .apiUserIstoricMedicalIdPut({
        id: this.userId,
        istoricMedical: istoricString,
        type: "istoricMedical"
      })
      .subscribe((r) => {
        this.getUser();
      });
  }

  addAlergie(){
    let alergieString = this.alergiiForm.get('alergieInput')?.value as string;

    this.userService
      .apiUserIstoricMedicalIdPut({
        id: this.userId,
        istoricMedical: alergieString,
        type: "alergii"
      })
      .subscribe((r) => {
        this.getUser();
      });
  }

  addCardio(){
    let cardioString = this.cardioForm.get('cardioInput')?.value as string;

    this.userService
    .apiUserIstoricMedicalIdPut({
      id: this.userId,
      istoricMedical: cardioString,
      type: "cardio"
    })
    .subscribe((r) => {
      this.getUser();
    });
  }

  removeIstoric(istoric: String){
    this.userService.apiUserIstoricMedicalIdDelete({
      id: this.userId,
      istoricMedical: istoric as string,
      type: "istoricMedical"
    }).subscribe((r)=>{
      this.getUser();
    })
  }

  removeAlergie(alergie: String){
    this.userService.apiUserIstoricMedicalIdDelete({
      id: this.userId,
      istoricMedical: alergie as string,
      type: "alergii"
    }).subscribe((r)=>{
      this.getUser();
    })
  }

  removeCardio(cardio: String){
    this.userService.apiUserIstoricMedicalIdDelete({
      id: this.userId,
      istoricMedical: cardio as string,
      type: "cardio"
    }).subscribe((r)=>{
      this.getUser();
    })
  }
}
