import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShortUser } from '../model/users.data';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Output() submitForm: EventEmitter<ShortUser> = new EventEmitter<ShortUser>();
  constructor() {}
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit() {
    //console.log(this.loginForm.value);
    this.submitForm.emit(this.loginForm.value);
  }

  isValid() {
    return (
      !!this.loginForm.controls['username'].value &&
      !!this.loginForm.controls['password'].value
    );
  }
}
