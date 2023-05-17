import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User, UserDto } from 'src/api/models';
import { UserService } from 'src/api/services';

@Component({
  selector: 'app-date-personale',
  templateUrl: './date-personale.component.html',
  styleUrls: ['./date-personale.component.css'],
})

export class DatePersonaleComponent implements OnInit {
  @Input() userId: string = '';

  user: UserDto = {};

  formButtonText = 'Edit';

  userForm = this.formBuilder.group({
    cnp: [this.user.cnp, Validators.required],
    varsta: this.user.varsta,
    telefon: this.user.telefon,
    email: this.user.email,
    profesie: this.user.profesie,
    munca: this.user.locDeMunca,
    strada: this.user.strada,
    numar: this.user.nrStrada,
    cod_postal: this.user.codPostal,
  });

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  updateFormValues(user: UserDto) {
    this.userForm.get('cnp')?.setValue(user.cnp);
    this.userForm.get('varsta')?.setValue(user.varsta);
    this.userForm.get('telefon')?.setValue(user.telefon);
    this.userForm.get('email')?.setValue(user.email);
    this.userForm.get('profesie')?.setValue(user.profesie);
    this.userForm.get('munca')?.setValue(user.locDeMunca);
    this.userForm.get('strada')?.setValue(user.strada);
    this.userForm.get('numar')?.setValue(user.nrStrada);
    this.userForm.get('cod_postal')?.setValue(user.codPostal);
  }

  updateUserValues() {
    this.user.cnp = this.userForm.get('cnp')?.value as string;
    this.user.varsta = this.userForm.get('varsta')?.value as number; //should perform a null check here
    this.user.telefon = this.userForm.get('telefon')?.value as string;
    this.user.email = this.userForm.get('email')?.value as string;
    this.user.profesie = this.userForm.get('profesie')?.value;
    this.user.locDeMunca = this.userForm.get('munca')?.value;
    this.user.strada = this.userForm.get('strada')?.value;
    this.user.nrStrada = this.userForm.get('numar')?.value as number;
    this.user.codPostal = this.userForm.get('cod_postal')?.value as number;
  }

  ngOnInit() {
    this.userService
      .apiUserIdGet$Json({ id: this.userId })
      .subscribe((user) => {
        this.user = user;
        this.updateFormValues(user);
      });

    this.userForm.disable();
  }

  onSubmit() {
    if (this.userForm.disabled) {
      this.userForm.enable();
      this.formButtonText = 'Save';
    } else {
      if (!this.userForm.valid) {
        alert('Please fill all the fields');
      } else {
        this.updateUserValues();

        this.userService
          .apiUserIdPut$Response({ id: this.userId, body: this.user })
          .subscribe((r) => {
            this.userForm.disable();
            this.userForm.updateValueAndValidity();
            this.formButtonText = 'Edit';
          });
      }
    }
  }
}
