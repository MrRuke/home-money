import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MetaService } from '@app/old/shared/services/meta.service';

import { UsersServices } from '@app/old/shared/services/users.services';
import { User } from '@app/old/shared/models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  public form: FormGroup;

  constructor(
    private usersServices: UsersServices,
    private router: Router,
    private metaService: MetaService,
  ) {
    this.metaService.setTitle('Регистрация');
    this.metaService.addDescription('Страница для регистрации в системе');
    this.metaService.addKeywords('регистрация');

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      name: new FormControl(null, [Validators.required]),
      agree: new FormControl(null, [Validators.requiredTrue]),
    });
  }

  public onSubmit(): void {
    const { email, password, name } = this.form.value;
    const user = {
      email,
      password,
      name,
    };
    this.usersServices.createNewUser(user)
      .subscribe(() => {
        this.router.navigate(['/login'], {
          queryParams: {
            nowCanLogin: true,
          },
        });
      });
  }

  private forbiddenEmails(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usersServices.getUserByEmail(control.value)
        .subscribe((user: User) => {
          if (user) {
            resolve({ forbiddenEmail: true });
          } else {
            resolve(null);
          }
        });
    });
  }
}
