export enum Gender {
  male = 'male',
  female = 'female',
}

/**
 * Main interface user from the API
 * Reference: https://dummyjson.com/docs/users#single
 */
export interface IUser {
  /**
   * an integer ID
   */
  id: number

  /**
   * User first name
   */
  firstName: string
  /**
   * User last name
   */
  lastName: string
  /**
   * User age
   */
  age: number
  /**
   * User gender
   */
  gender: Gender
}

/**
 * Used to store the main data after logged-in
 */
export interface IUserSlice {
  /**
   * User name
   */
  name: string
  /**
   * Authorization token
   */
  token: string
}
