import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NavBarComponent} from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private navBar: NavBarComponent,
  ) { }

  ngOnInit(): void {
  }

  login(userName: string) {
    if(userName != null) {
      sessionStorage.setItem('loggedUser', userName);
      this.navBar.changeUserName();
      this.router.navigate(['/dashboard']);
    }
  }

}
