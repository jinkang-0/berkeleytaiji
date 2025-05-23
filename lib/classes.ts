export class User {
  private email: string;
  private name: string;
  private sub: string | undefined;

  constructor(email: string, name: string, sub: string | undefined) {
    this.email = email;
    this.name = name;
    this.sub = sub;
  }

  getEmail() {
    return this.email;
  }

  getName() {
    return this.name;
  }

  getSub() {
    return this.sub;
  }
}
