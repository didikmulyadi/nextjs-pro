export enum Gender {
  male = "male",
  female = "female",
}

/**
 * Main interface user from the API
 * Reference: https://dummyjson.com/docs/users#single
 */
export interface IUser {
  id: number;

  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
}

export interface IUserSlice {
  name: string;
  token: string;
}
