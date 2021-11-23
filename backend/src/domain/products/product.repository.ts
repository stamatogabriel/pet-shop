import { Product, ProductIndex } from './product';
import { IQuery } from '../../common/interfaces/query';

export interface IProductRepository {
  ProductIndex(query: IQuery): Promise<ProductIndex>;
  ProductCreate(createFields: Product): Promise<Product>;
  ProductUpdateById(productId: string, updateFields: Partial<Product>): Promise<Product>;
  ProductFindById(productId: string): Promise<Product>;
  ProductDestroy(productId: string): Promise<unknown>;
}
