import {User} from "../models/user.model";

export class AuthServices {
  private isAuth = false;
  private user: User;

  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
    window.localStorage.clear();
  }

  isLoggedIn(): boolean {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    if (this.user) {
      return true;
    } else {
      return this.isAuth;
    }
  }
}
