import {Component, OnInit} from '@angular/core';
import {User} from "../../../../shared/models/user.model";
import {AuthServices} from "../../../../shared/services/auth.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  user: User;

  constructor(private authSerive: AuthServices,
              private router: Router) {
  }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  onLogout() {
    this.authSerive.logout();
    this.router.navigate(['login'])
  }

}
