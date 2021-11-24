export interface User {
  _id: string
  email: string
  name: string
  phone: string
  updatedAt: Date
  createdAt: Date
}

export interface UserState {
  readonly profile: User
}
