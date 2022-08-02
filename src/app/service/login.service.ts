import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  clear(): void {
    sessionStorage.clear();

  }

  logout(): void {

    this.clear();
    this.router.navigate(['/login']);
  }
}
