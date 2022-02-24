export interface IUser {
  _id: string
  name: string
  email: string
  phone: string
  roles: string[] | string
  createdAt: Date
  updatedAt: Date
}