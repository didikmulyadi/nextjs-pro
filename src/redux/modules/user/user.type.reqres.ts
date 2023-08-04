import { Gender, IUser } from "./user.type";

export interface IUpdateUserRequestBody {
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
}

export interface IUpdateUserResponse extends IUser {}
