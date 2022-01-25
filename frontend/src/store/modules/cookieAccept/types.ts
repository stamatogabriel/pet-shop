export enum CookiesTypes {
  CHANGE_ACCEPT = '@cookies/CHANGE_ACCEPT',
  UNDERSTOOD = '@cookies/UNDERSTOOD',
}

export interface IAcceptCookies {
  acceptedCookies: {
    needed: boolean
    marketing: boolean
    analyticals: boolean
    functionals: boolean
  }
  understood: boolean
}
