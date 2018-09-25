export class User {
  firstName?: string;
  email?: string;
  password: string;
  token: string;
  isCookiesAccepted: boolean;
  acceptCookies: any = () => {
    this.isCookiesAccepted = true;
  }
  constructor(data: object) {
    this.isCookiesAccepted = false;
    Object.assign(this, data);
  }
}
