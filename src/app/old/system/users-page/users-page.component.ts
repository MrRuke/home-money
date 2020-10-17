import { Component } from '@angular/core';
import { MetaService } from '@app/old/shared/services/meta.service';

import { UsersService } from '../shared/services/users.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent {
  public users: User[];
  public isLoaded = false;

  constructor(
    private usersService: UsersService,
    private metaService: MetaService,
  ) {
    this.metaService.setTitle('Пользователи');
    this.metaService.addDescription('Страница пользователей');
    this.metaService.addKeywords('пользователи');

    this.usersService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
        this.isLoaded = true;
      });
  }
}
