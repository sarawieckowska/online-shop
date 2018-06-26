export class User {
  login: string;
  email: string;
  _id: string = '';
  createdAt: string = '';
  isCookiesAccepted: boolean = false;
  acceptCookies: any = () => {
    this.isCookiesAccepted = true;
  }

  constructor(data: object) {
    Object.assign(this, data);
  }
}
