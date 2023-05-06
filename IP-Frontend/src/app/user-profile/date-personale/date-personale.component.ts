import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserDto } from 'src/api/models';
import { UserService } from 'src/api/services';

@Component({
  selector: 'app-date-personale',
  templateUrl: './date-personale.component.html',
  styleUrls: ['./date-personale.component.css'],
})
export class DatePersonaleComponent implements OnInit {
  @Input() userId: string = '';

  user: UserDto = new Object();

  formButtonText = 'Edit';

  userForm = this.formBuilder.group({
    cnp: [this.user.cnp, Validators.required],
    varsta: this.user.varsta,
    telefon: this.user.nr_tel,
    email: this.user.email,
    profesie: this.user.profesie,
    munca: this.user.loc_de_munca,
    strada: this.user.strada,
    numar: this.user.nr_strada,
    cod_postal: this.user.cod_postal,
  });

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  updateFormValues(user: UserDto) {
    this.userForm.get('cnp')?.setValue(user.cnp);
    this.userForm.get('varsta')?.setValue(user.varsta);
    this.userForm.get('telefon')?.setValue(user.nr_tel);
    this.userForm.get('email')?.setValue(user.email);
    this.userForm.get('profesie')?.setValue(user.profesie);
    this.userForm.get('munca')?.setValue(user.loc_de_munca);
    this.userForm.get('strada')?.setValue(user.strada);
    this.userForm.get('numar')?.setValue(user.nr_strada);
    this.userForm.get('cod_postal')?.setValue(user.cod_postal);
  }

  updateUserValues() {
    this.user.cnp = this.userForm.get('cnp')?.value;
    this.user.varsta = this.userForm.get('varsta')?.value as number; //should perform a null check here
    this.user.nr_tel = this.userForm.get('telefon')?.value;
    this.user.email = this.userForm.get('email')?.value;
    this.user.profesie = this.userForm.get('profesie')?.value;
    this.user.loc_de_munca = this.userForm.get('munca')?.value;
    this.user.strada = this.userForm.get('strada')?.value;
    this.user.nr_strada = this.userForm.get('numar')?.value as number;
    this.user.cod_postal = this.userForm.get('cod_postal')?.value as number;
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
