import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { User } from '@app/old/shared/models/user.model';
import { AuthServices } from '@app/old/shared/services/auth.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public date: Date = new Date();
  // @ts-expect-error legacy
  public user: User;

  constructor(
    private authSerive: AuthServices,
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.user = JSON.parse(window.localStorage.getItem('user')!);
  }

  public onLogout(): void {
    this.authSerive.logout();
    this.router.navigate(['login']);
  }

}
