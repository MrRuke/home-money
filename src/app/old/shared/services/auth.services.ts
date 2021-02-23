import { User } from '../models/user.model';

export class AuthServices {
  private isAuth = false;
  // @ts-ignore
  private user: User;

  public login(): void {
    this.isAuth = true;
  }

  public logout(): void {
    this.isAuth = false;
    window.localStorage.clear();
  }

  public isLoggedIn(): boolean {
    // @ts-ignore
    this.user = JSON.parse(window.localStorage.getItem('user'));
    if (this.user) {
      return true;
    } else {
      return this.isAuth;
    }
  }
}
