export interface MenuItem {
  label: string
  link?: string
  sub_menu?: {
    open: boolean
    items: MenuItem[]
  }
}
