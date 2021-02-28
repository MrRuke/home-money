import {
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Params,
  Router,
} from '@angular/router';

import { User } from '@app/old/shared/models/user.model';
import { Message } from '@app/old/shared/models/message.model';
import { MetaService } from '@app/old/shared/services/meta.service';
import { UsersServices } from '@app/old/shared/services/users.services';
import { AuthServices } from '@app/old/shared/services/auth.services';
import { fadeStateTrigger } from '@app/old/shared/animations/fade.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeStateTrigger],
})

export class LoginComponent implements OnInit {
  @HostBinding('@fade')
  public a = true;

  public form: FormGroup;
  // @ts-ignore
  public message: Message;

  constructor(
    private usersServices: UsersServices,
    private authServices: AuthServices,
    private router: Router,
    private route: ActivatedRoute,
    private metaService: MetaService,
  ) {
    this.metaService.setTitle('Вход в систему');
    this.metaService.addDescription('Страница для входа в систему');
    this.metaService.addKeywords('логин, вход, система');

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  public ngOnInit(): void {
    this.message = {
      type: 'alert-danger',
    };
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params.nowCanLogin) {
          this.showMessage({
            text: 'Вы успешно зарегистрированы',
            type: 'alert-success',
          });
        } else if (params.accessDenied) {
          this.showMessage({
            text: 'Для работы с системой необходима авторизация',
            type: 'alert-warning',
          });
        }
      });
  }

  public onSubmit(): void {
    const formData = this.form.value;
    this.usersServices.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            this.showMessage({
              text: 'Вы авторизовались',
              type: 'alert-success',
            });
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authServices.login();
            this.router.navigate(['/system', 'bill']);
          } else {
            this.showMessage({
              text: 'Пароль не верный',
              type: 'alert-danger',
            });
          }
        } else {
          this.showMessage({
            text: 'Такого пользователя не существует',
            type: 'alert-danger',
          });
        }
      });
  }

  private showMessage(message: Message): void {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 3000);
  }
}
