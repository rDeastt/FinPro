import { Component } from '@angular/core';
import {UserService} from "../../service/user.service";
import {SecurityService} from "../../service/security-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string;
  password: string;
  username: string;
  userlastname: string;
  userdni: string;
  constructor(private router: Router) {}

  public register(){}
}
