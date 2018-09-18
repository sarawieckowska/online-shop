export class User {
  name?: string;
  email?: string;
  password: string;
  isCookiesAccepted: boolean;
  acceptCookies: any = () => {
    this.isCookiesAccepted = true;
  }
  constructor(data: object) {
    this.isCookiesAccepted = false;
    Object.assign(this, data);
  }
}
