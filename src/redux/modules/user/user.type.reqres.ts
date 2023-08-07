import { Gender, IUser } from './user.type'

/**
 * a request body for updating user
 */
export interface IUpdateUserRequestBody {
  /**
   * user first name
   */
  firstName: string
  /**
   * user last name
   */
  lastName: string
  /**
   * user age
   */
  age: number
  /**
   * user gender
   */
  gender: Gender
}

/**
 * a response of update user api
 */
export interface IUpdateUserResponse extends IUser {}
