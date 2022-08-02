import {Component, Injectable, Input, OnInit} from '@angular/core';
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class NavBarComponent implements OnInit {

  @Input() loggedUser: string | null | undefined;
  logInOut: string | undefined;
  routerLinkNew: string | undefined;
  loggedOrNot: boolean | undefined;

  constructor(private logService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.routerLinkNew = '/login';
    // this.logInOut = 'Login';
    this.loggedOrNot = false;

    if (sessionStorage.getItem('loggedUser') !== null) {
      this.logInOut = 'Logout';
      this.loggedUser = sessionStorage.getItem('loggedUser');
      this.routerLinkNew = '/dashboard';
      this.loggedOrNot = true;
    } else {
      this.logInOut = '';
    }
  }

  logInOutUser() {
    if (this.logInOut === 'Logout') {
      // this.router.navigate(['/']);
      this.logService.logout();
      setTimeout(() => {
        window.location.reload();
      }, 100);

    } else if (this.logInOut === 'Login') {
      this.router.navigate(['/login']);
    }
  }

  changeUserName() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

}
