import {Component, HostBinding, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersServices} from "../../shared/services/users.services";
import {User} from "../../shared/models/user.model";
import {Message} from "../../shared/models/message.model";
import {AuthServices} from "../../shared/services/auth.services";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {fadeStateTrigger} from "../../shared/animations/fade.animation";
import {Meta, Title} from "@angular/platform-browser";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeStateTrigger]
})
export class LoginComponent implements OnInit {
  @HostBinding('@fade') a = true;
  form: FormGroup;
  message: Message;

  constructor(private usersServices: UsersServices,
              private authServices: AuthServices,
              private router: Router,
              private route: ActivatedRoute,
              private title: Title,
              private meta: Meta) {
    title.setTitle('Вход в систему');
    meta.addTags([
      {name: 'keywords', content: 'логин, вход, система'},
      {name: 'description', content: 'Страница для входа в систему'}
    ])
  }

  ngOnInit() {
    this.message = new Message('', 'alert-danger');
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
          this.showMessage({text: 'Вы успешно зарегистрированы', type: 'alert-success'});
        } else if (params['accessDenied']) {
          this.showMessage({text: 'Для работы с системой необходима авторизация', type: 'alert-warning'});
        }
      });
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 3000)
  }


  onSubmit() {
    const formData = this.form.value;
    this.usersServices.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            this.showMessage({text: 'Вы авторизовались', type: 'alert-success'});
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authServices.login();
            this.router.navigate(['/system', 'bill']);
          } else {
            this.showMessage({text: 'Пароль не верный', type: 'alert-danger'});
          }
        } else {
          this.showMessage({text: 'Такого пользователя не существует', type: 'alert-danger'});
        }
      });
  }

}
