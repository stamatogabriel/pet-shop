export interface IQuery {
  page: number | string;
  limit: number | string;
  keyword?: string;
  status?: string;
  email?: string;
  name?: string;
  title?: string;
  description?: string;
  type?: string;
  startDate?: string;
  endDate?: string;
  tutor?: string;
}
