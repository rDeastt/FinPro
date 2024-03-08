import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import {SecurityService} from "../../service/security-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  nameUser: string;
  ageuser: number;
  typeuser: string;
  districUser: string;
  constructor(private userService: UserService, private securityService: SecurityService, private router: Router) {}

  ngOnInit(): void {
    //var user: User = new User();

// location.reload();
    const user = localStorage.getItem("UserLogged");
    const userParsed = user === null ? null : JSON.parse(user);

    if (userParsed !== null) {
      if (userParsed.typeUser === 'universitario') {
        this.router.navigate(['/teachers']);
      } else {
        this.router.navigate(['/colegios']);
      }
    }
  }

  login() {
    var user: User = new User();
    user.email = this.email;
    user.password = this.password;
    user.nameUser = this.nameUser;
    user.ageUser = this.ageuser;
    user.districUser= this.districUser;
    user.typeUser= this.typeuser;
    this.securityService.login( user)

        .subscribe((response: any) => {
          /*  if (response.typeUser === 'CAMBIO') {
              console.log("AAAAA!!");
              this.router.navigate(['/teachers']);
            } else {
              this.router.navigate(['/colegios']);
            }
  */
          localStorage.setItem('UserLogged', JSON.stringify(response));
          location.reload();
          console.log(response);
        }, (error: HttpErrorResponse) => {
          console.log("El usuario no existe!!");
        });
  }
}
