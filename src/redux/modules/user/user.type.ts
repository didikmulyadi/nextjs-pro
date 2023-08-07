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
 *
 */
export interface IUserSlice {
  /**
   *
   */
  name: string
  /**
   *
   */
  token: string
}

const a = ''
