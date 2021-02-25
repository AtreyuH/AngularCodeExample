export class User {
  firstName: string;
  lastName: string;
  profilePictureUrl: string;

  constructor(obj: Partial<User>) {
    Object.assign(this, obj);
  }
}
