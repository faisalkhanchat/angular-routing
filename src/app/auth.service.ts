export class AuthService {
  loggedIn = false;
  constructor() { }
  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            resolve(this.loggedIn);
          }
        );
      }
    );
  }
  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

}
