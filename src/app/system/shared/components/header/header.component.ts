import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { User } from '@app/shared/models/user.model';
import { AuthServices } from '@app/shared/services/auth.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public date: Date = new Date();
  public user: User;

  constructor(
    private authSerive: AuthServices,
    private router: Router,
  ) {
  }

  public ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  public onLogout() {
    this.authSerive.logout();
    this.router.navigate(['login']);
  }

}
