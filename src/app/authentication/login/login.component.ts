import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/model/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public formGroup = new FormGroup(
    {
      username: new FormControl("", Validators.compose(
        [Validators.required, Validators.minLength(3)]
      )),
      password: new FormControl("", Validators.required),
    }
  );

  constructor(
    private router:Router,
    private userService:UserService
  ) {

  }

  get username() {
    return this.formGroup.get("username");
  }

  get password() {
    return this.formGroup.get("password");
  }

  login() {
    if(this.formGroup.valid) {
      this.userService.login(<string>this.username?.value, <string>this.password?.value)
      .add(
        () => {
          this.router.navigateByUrl("/home");
        }
      )
    }
  }

}
