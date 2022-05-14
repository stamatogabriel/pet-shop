export enum UserTypes {
  UPDATE_USER = '@user/UPDATE_USER',
}

export interface User {
  _id: string
  avatar?: string
  email: string
  name: string
  telephone: string
  ativo: boolean
  document: string
  editedAt: Date
  createdAt: Date
  address?: Address
}

interface Address {
  country: string
  state: string
  city: string
  neighborhood: string
  street: string
  street_number: string
  complement?: string
  zipcode: string
}

export interface UserState {
  readonly profile: User | null
}
